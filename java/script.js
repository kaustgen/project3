let map;

async function initMap() {
    const garden = {lat: 38.872, lng: -104.996};
    //@ts-igonore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker")

    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: garden,
        mapId: "mapID",
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: garden,
        title: "Garden",
    });
}

initMap();