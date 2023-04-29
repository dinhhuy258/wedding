'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function() {
  is_windowresize = true;
});


//INITIALIZE MAP
function initialize() {
  initialize_groom_party_map()
  initialize_bride_party_map()
}

function initialize_bride_party_map() {
  //DEFINE MAP OPTIONS
  //=======================================================================================
  var mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(16.435055, 107.760427),
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    overviewMapControl: true,
  };

  //CREATE NEW MAP
  //=======================================================================================
  var map = new google.maps.Map(document.getElementById('bride-party-map-canvas'), mapOptions);

  //MARKER ICON
  //=======================================================================================
  var marker = new MarkerWithLabel({
    position: new google.maps.LatLng(16.435055, 107.760427),
    draggable: false,
    raiseOnDrag: false,
    icon: ' ',
    map: map,
    labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
    labelAnchor: new google.maps.Point(29, 20),
    labelClass: "labels" // the CSS class for the label
  });

  //INFO WINDOWS
  //=======================================================================================
  var contentString = '<div>' +
    'WEDDING PARTY';
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  //OPEN INFO WINDOWS ON LOAD
  //=======================================================================================
  infowindow.open(map, marker);

  //ON CLICK MARKER, OPEN INFO WINDOWS
  //=======================================================================================
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  //ON BOUND EVENTS AND WINDOW RESIZE
  //=======================================================================================
  google.maps.event.addListener(map, 'bounds_changed', function() {
    if (is_windowresize) {
      window.setTimeout(function() {
        map.panTo(marker1.getPosition());
      }, 500);
    }
    is_windowresize = false;
  });
}

//INITIALIZE GROOM PARTY MAP
function initialize_groom_party_map() {
  //DEFINE MAP OPTIONS
  //=======================================================================================
  var mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(16.0474634, 108.2232247),
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    overviewMapControl: true,
  };

  //CREATE NEW MAP
  //=======================================================================================
  var map = new google.maps.Map(document.getElementById('groom-party-map-canvas'), mapOptions);

  //MARKER ICON
  //=======================================================================================
  var marker = new MarkerWithLabel({
    position: new google.maps.LatLng(16.0474634, 108.2232247),
    draggable: false,
    raiseOnDrag: false,
    icon: ' ',
    map: map,
    labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
    labelAnchor: new google.maps.Point(29, 20),
    labelClass: "labels" // the CSS class for the label
  });

  //INFO WINDOWS
  //=======================================================================================
  var contentString = '<div>' +
    'WEDDING PARTY';
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  //OPEN INFO WINDOWS ON LOAD
  //=======================================================================================
  infowindow.open(map, marker);

  //ON CLICK MARKER, OPEN INFO WINDOWS
  //=======================================================================================
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  //ON BOUND EVENTS AND WINDOW RESIZE
  //=======================================================================================
  google.maps.event.addListener(map, 'bounds_changed', function() {
    if (is_windowresize) {
      window.setTimeout(function() {
        map.panTo(marker1.getPosition());
      }, 500);
    }
    is_windowresize = false;
  });
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
