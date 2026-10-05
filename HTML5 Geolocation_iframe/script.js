function getLocation() {
    const result = document.getElementById("locationResult");

    if (!navigator.geolocation) {
        result.innerHTML = "<strong>Geolocation is not supported by your browser.</strong>";
        return;
    }

    result.innerHTML = "Requesting your location...";

    navigator.geolocation.getCurrentPosition(
        showPosition,
        showError,
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function showPosition(position) {
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    const accuracy = Math.round(position.coords.accuracy);

    document.getElementById("locationResult").innerHTML =
        "<strong>Your Current Location</strong><br>" +
        "Latitude: " + latitude + "<br>" +
        "Longitude: " + longitude + "<br>" +
        "Approximate accuracy: " + accuracy + " metres";
}

function showError(error) {
    let message;

    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "Location permission was denied. Please allow location access and try again.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is currently unavailable.";
            break;
        case error.TIMEOUT:
            message = "The location request timed out. Please try again.";
            break;
        default:
            message = "An unknown location error occurred.";
    }

    document.getElementById("locationResult").innerHTML =
        "<strong>" + message + "</strong>";
}
