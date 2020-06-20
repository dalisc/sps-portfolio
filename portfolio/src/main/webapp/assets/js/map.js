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

  var places = [
    {
      title: "Singapore",
      coordinates: { lat: 1.3521, lng: 103.8198 },
      desc:
        "When it opened in 2008, the Singapore Flyer rotated in a counter-clockwise direction as viewed from the Marina Centre, but later that year was reversed on the advice of Feng Shui masters.",
      link: "https://expatliving.sg/20-quirky-facts-about-singapore/",
    },
    {
      title: "Sydney",
      coordinates: { lat: -33.8688, lng: 151.2093 },
      desc:
        "15,500 light bulbs are changed every year at the Sydney Opera House. Next time you’re at the Sydney Opera House, look up and see if you can spot any burnt out light bulbs. Then be sure to point it out to the usher. I dare you.",
      link: "https://www.sydneymovingguide.com/sydney-facts/",
    },
    {
      title: "Phnom Penh",
      coordinates: { lat: 11.5564, lng: 104.9282 },
      desc:
        "Ever wanted to eat a tarantula? Even if you’d never consider the possibility, many in Phnom Penh consider tarantula kebabs to be quite the delicacy. Unsurprisingly, reports are that it kind of “tastes like chicken.”",
      link: "",
    },
    {
      title: "Uluru",
      coordinates: { lat: -25.363, lng: 131.044 },
      desc:
        "Uluru, also referred to as Ayers Rock, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335 km (208 mi) south west of the nearest large town, Alice Springs; 450 km (280 mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta Natio" +
        "nal Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.",
      link: "https://en.wikipedia.org/w/index.php?title=Uluru",
    },
  ];

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

    for (var i = 0; i < places.length; i++) {
      var content = parseInfoWindowContent(places[i]);

      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: places[i].coordinates,
        title: places[i].title,
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
  }

  function parseInfoWindowContent(place) {
    var contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h1 id="firstHeading" class="firstHeading">${place.title}</h1>` +
      '<div id="bodyContent">' +
      `<p>${place.desc}</p>` +
      `<a style="display: ${place.link ? "block" : "none"};" href="${
        place.link
      }" target="_blank">Discover more!</a>` +
      "</div>" +
      "</div>";

    return contentString;
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));
