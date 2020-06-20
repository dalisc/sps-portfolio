(function (exports) {
  "use strict";

  var mapCustomStyles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#bab387",
        },
        {
          weight: 1.5,
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4f4040",
        },
        {
          weight: 0.5,
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#f3c623",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#7d9461",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#2c691b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#f3d3d3",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c8a55f",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ecc6b1",
        },
      ],
    },
    {
      featureType: "road.local",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#aa8f83",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#127681",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ];

  var markers = [];

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 1.3521,
        lng: 103.8198,
      },
      zoom: 2,
      styles: mapCustomStyles,
    });

    var map = exports.map;
    var infowindow = new google.maps.InfoWindow();

    createMarkers(map, infowindow);
  }

  function createMarkers(map, infowindow) {
    fetch("/markers")
      .then((response) => response.json())
      .then((markers) => {
        console.log(markers);
        for (var i = 0; i < markers.length; i++) {
          createMarkerWithInfoWindow(map, infowindow, markers[i]);
        }
      });
  }

  function createMarkerWithInfoWindow(map, infowindow, place) {
    var content = parseInfowindowContent(place);

    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: { lat: place.lat, lng: place.lng },
      title: place.title,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, content, infowindow) {
        return function () {
          infowindow.setContent(content);
          infowindow.open(map, marker);
        };
      })(marker, content, infowindow)
    );

    markers.push(marker);
  }

  function parseInfowindowContent(place) {
    var contentString =
      '<div id="infoWindow">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h1 id="infoWindowHeading">${place.title}</h1>` +
      '<div id="infowindowContent">' +
      `<p style="white-space: pre-line">${place.desc}</p>` +
      `<p><a style="display: ${place.link ? "inline-block" : "none"};" href="${
        place.link
      }" target="_blank">Discover more!</a></p>` +
      `<p style="display: ${
        place.submitter ? "inline-block" : "none"
      }; font-style: italic;">Submitted by: ${place.submitter}</p>` +
      "</div>" +
      "</div>";

    return contentString;
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));
