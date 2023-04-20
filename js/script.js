let map;
let garden = {lat: 38.872, lng: -104.996};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: garden,
    zoom: 8,
    mapId: "9818a76589c36beb",
  });

  let marker = new google.maps.Marker({
    position: garden,
    map: map,
    title: 'Garden of the Gods'
  });
}