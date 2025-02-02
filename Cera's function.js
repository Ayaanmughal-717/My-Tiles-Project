 // Function to handle tile click
 function openTile(tileName) {
    alert(`Opening details for: ${tileName}`);
    // Add logic to redirect or open the tile details page
}
 
 
 // Initialize Google Maps
function initMap() {
    const companyLocation = { lat: 12.9716, lng: 77.5946 }; // Replace with actual location coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: companyLocation,
    });
    new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: "Cera's Ceramic Tiles",
    });
}

// Ensure the map is loaded after the page is ready
window.initMap = initMap;
