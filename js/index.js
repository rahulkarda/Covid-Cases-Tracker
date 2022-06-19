// Update map on first load
updateMap();

// updateMap function - Updates data and marks cases on the map

function updateMap() {

    // Update data
    console.log("Updating Map with realtime data");

    // Fetch data from API
    fetch("https://corona-api.com/countries")
        .then(response => response.json())
        .then(rsp => {

            // Displaying data
            console.log(rsp);

            rsp.data.forEach(element => {
                // Latitude
                latitude = element.coordinates.latitude;

                // Longitude
                longitude = element.coordinates.longitude;

                // Confirmed cases today
                cases = element.today.confirmed;

                // Dark color means more cases
                if (cases < 255) {
                    color = "rgb(255, 0, 0)";
                }

                else {
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

// Updates data after 20000ms
let interval = 20000;

// Calls updateMap function after set intervals
setInterval(updateMap, interval); 