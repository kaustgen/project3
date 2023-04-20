

function initMap() {
  var garden = {lat: 38.872, lng: -104.996};
  map = new google.maps.Map(document.getElementById("map"), {
    center: garden,
    zoom: 8,
  });

  var marker = new google.maps.Marker({
    position: garden,
    map: map,
    title: 'Garden of the Gods'
  });
}