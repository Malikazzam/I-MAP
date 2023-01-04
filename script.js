function initMap() {
    //map option
    var option = { lat: 31.963158, lng: 35.930359 };
    //new map
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: option,
    });
    //add marker
    var marker = new google.maps.Marker({
      position: option,
      map: map,
    });
  
    var input = document.getElementById("search");
    var error = document.getElementById("no-found");
    var searchBox = new google.maps.places.SearchBox(input);
    //first Function
  
    google.maps.event.addListener(searchBox, "places_changed", function () {
      var places = searchBox.getPlaces(),
        bounds = new google.maps.LatLngBounds(),
        i,
        place,
        lat,
        long;
  
      for (i = 0; (place = places[i]); i++) {
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
      }
      map.fitBounds(bounds);
      map.setZoom(11);
      if(places.length > 0){
            error.style.display = "none";
      } else {
            error.style.display = "block";
      }
    });

    map.addListener("bounds_changed", function () {
      searchBox.setBounds(map.getBounds());
    });
  }
  