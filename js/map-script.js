'use strict';

async function initMaps() {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  await initMap("bride-party-map-canvas", new google.maps.LatLng(16.435055, 107.760427))
  await initMap("groom-party-map-canvas", new google.maps.LatLng(16.0474634, 108.2232247))
}

async function initMap(mapElementId, center) {
  var mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    mapId: mapElementId
  };

  var map = new google.maps.Map(document.getElementById(mapElementId), mapOptions);

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: center,
  });

  var contentString = '<div>' +
    'WEDDING PARTY';
  '</div>';
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infoWindow.open({
    anchor: marker,
    map,
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });
}

initMaps()
