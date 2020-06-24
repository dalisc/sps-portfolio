function validateMarkerForm() {
  var lat, lng, link;
  var latError, lngError, linkError;

  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  lat = document.forms["mapForm"]["lat"].value;
  lng = document.forms["mapForm"]["lng"].value;
  link = document.forms["mapForm"]["link"].value;

  if (lat < -90 || lat > 90) {
    document.getElementById("lat-error").innerHTML = "Latitude must be between -90 and 90.";
    latError = true;
  } else {
    document.getElementById("lat-error").innerHTML = "";
    latError = false;
  }

  if (lng < -180 || lng > 180) {
    document.getElementById("lng-error").innerHTML = "Longitude must be between -180 and 180.";
    lngError = true;
  } else {
    document.getElementById("lng-error").innerHTML = "";
    lngError = false;
  }

  if (link !== "" && !urlRegex.test(link)) {
    document.getElementById("link-error").innerHTML = "Not a valid URL. Did you specify the protocol (HTTP or HTTPS)?";
    linkError = true;
  } else {
    document.getElementById("link-error").innerHTML = "";
    linkError = false;
  }

  return !latError && !lngError && !linkError;
}