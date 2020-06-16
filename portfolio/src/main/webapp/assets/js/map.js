(function(exports) {
    "use strict";

    function initMap() {
        exports.map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 1.3521,
                lng: 103.8198
            },
            zoom: 2
        });
    }

    exports.initMap = initMap;
})((this.window = this.window || {}));