// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.stream.*;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) { 
    // check edge cases before calling helper functions
    if (request.getDuration() == 0 || request.getDuration() > 1440 ) { 
        return new ArrayList<>();
    }

    List<TimeRange> unavailableTimeRanges = getUnavailableTimeRanges(events, request);
    List<TimeRange> availableTimeRanges = getAvailableTimeRanges(unavailableTimeRanges, request.getDuration());

    return availableTimeRanges;
  }

  /**
  * Returns the time ranges for which the meeting request cannot coincide with. 
  * A time range isn't available if there is an event happening and some people in the
  * event are required to be in the meeting.
  * If there are no unavailable slots, this function returns an empty arraylist.
  *
  * @param events the existing events with attendees that already planned
  * @param request the meeting request containing the duration and attendees needed
  * @return an arraylist containing TimeRanges that aren't available for the meeting, sorted by start time
  */
  private List<TimeRange> getUnavailableTimeRanges(Collection<Event> events, MeetingRequest request) {
    return events.stream()
        .filter(e -> !Collections.disjoint(e.getAttendees(), request.getAttendees()))
        .map(e -> e.getWhen())
        .sorted(TimeRange.ORDER_BY_START)
        .collect(Collectors.toList());
  }

  /**
  * Returns the time ranges for which the meeting request can happen in.
  * This returns the free slots of the day that are at least the duration of the meeting.
  * This returns the "inverse" of the unavailable timeslots if all free slots
  * are at least the duration of the meeting.
  * If there are no free slots, this function returns an empty arraylist.
  *
  * @param unavailableTimeRanges the time ranges that are not available
  * @param duration the duration of the requested meeting
  * @return an arraylist containing TimeRanges that are available for the meeting, sorted by start time
  */
  private List<TimeRange> getAvailableTimeRanges(Collection<TimeRange>unavailableTimeRanges, long duration) {
    List<TimeRange> availableTimeRanges = new ArrayList<>();

    int start = 0;

    for (TimeRange tr : unavailableTimeRanges) {
        if (tr.start() - start >= duration) {
            availableTimeRanges.add(TimeRange.fromStartEnd(start, tr.start(), false));
        }   

        // the start time of the next available time range is the end time of the current time range
        // or the end time of the time range in which this current time range is a subset of
        if (tr.end() > start) {
            start = tr.end();
        }

    }

    // handle the case where there are no more events for the day
    if (TimeRange.END_OF_DAY - start + 1 >= duration) {
        availableTimeRanges.add(TimeRange.fromStartEnd(start, TimeRange.END_OF_DAY, true));
    }

    return availableTimeRanges;
  }
}
