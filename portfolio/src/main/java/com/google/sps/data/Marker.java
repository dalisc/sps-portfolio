package com.google.sps.data;

/** Represents a marker on the map. */
public class Marker {

  private final double lat;
  private final double lng;
  private final String title;
  private final String desc;
  private final String link;
  private final String submitter;

  public Marker(double lat, double lng, String title, String desc, String link, String submitter) {
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.desc = desc;
    this.link = link;
    this.submitter = submitter;
  }

  public double getLat() {
    return lat;
  }

  public double getLng() {
    return lng;
  }

  public String getTitle() {
    return title;
  }

  public String getDesc() {
    return desc;
  }

  public String getLink() {
    return link;
  }

  public String getSubmitter() {
    return submitter;
  }
}
