package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.sps.data.Marker;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles fetching and saving markers data. */
@WebServlet("/markers")
public class MarkerServlet extends HttpServlet {

  /** Responds with a JSON array containing marker data. */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    try {
        response.setContentType("application/json");

        Collection<Marker> markers = getMarkers();
        Gson gson = new Gson();
        String json = gson.toJson(markers);

        response.getWriter().println(json);
    } catch (IOException error) {
        System.out.println(error);
    }
    
  }

  /** Accepts a POST request containing a new marker. */
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
    try {
        double lat = Double.parseDouble(request.getParameter("lat"));
        double lng = Double.parseDouble(request.getParameter("lng"));
        String title = getParameter(request, "title", "");
        String desc = getParameter(request, "desc", "");
        String link = getParameter(request, "link", "");
        String submitter = getParameter(request, "submitter", "");

        Marker marker = new Marker(lat, lng, title, desc, link, submitter);
        storeMarker(marker);

        // Redirect back to the HTML page.    
        response.sendRedirect("/#maps");
    } catch (IOException error) {
        System.out.println(error);
    }
  }

   /** Fetches markers from Datastore. */
  private Collection<Marker> getMarkers() {
    Collection<Marker> markers = new ArrayList<>();

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    Query query = new Query("Marker");
    PreparedQuery results = datastore.prepare(query);

    for (Entity entity : results.asIterable()) {
      double lat = (double) entity.getProperty("lat");
      double lng = (double) entity.getProperty("lng");
      String title = (String) entity.getProperty("title");
      String desc = (String) entity.getProperty("desc");
      String link = (String) entity.getProperty("link");
      String submitter = (String) entity.getProperty("submitter");

      Marker marker = new Marker(lat, lng, title, desc, link, submitter);
      markers.add(marker);
    }
    return markers;
  }

 /**
   * @return the request parameter, or the default value if the parameter
   *         was not specified by the client
   */
  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }

  /** Stores a marker in Datastore. */
  public void storeMarker(Marker marker) {
    Entity markerEntity = new Entity("Marker");
    markerEntity.setProperty("lat", marker.getLat());
    markerEntity.setProperty("lng", marker.getLng());
    markerEntity.setProperty("title", marker.getTitle());
    markerEntity.setProperty("desc", marker.getDesc());
    markerEntity.setProperty("link", marker.getLink());
    markerEntity.setProperty("submitter", marker.getSubmitter());

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(markerEntity);
  }
}
