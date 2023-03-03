//Create Map (map) inside div with #map ID; set view
const map = L.map('map').setView([39.56741, -97.66391], 5);

//Add tileLayer to map

L.tileLayer('https://api.mapbox.com/styles/v1/jacob-cara-e/cld4xm9ae001h01qupfrgjrfg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFjb2ItY2FyYS1lIiwiYSI6ImNsYWNvdG1ybzBjaTgzcHBlczU3aTI1MHQifQ.H9XbnFnyjJeYBfQxiDL4-Q', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox </a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap </a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map </a></strong>",
}).addTo(map);

//Add Pop-up Milwaukee

var marker = L.marker([43.072, -87.936]).addTo(map);

// Add popup message MKE

marker.bindPopup('Milwaukee Lead Epidemic');

//Add Pop-up Flint
var marker = L.marker([43.0167321719256, -83.68955030409722]).addTo(map)

//Add pop-up message Flint

marker.bindPopup('Flint Water Crisis')