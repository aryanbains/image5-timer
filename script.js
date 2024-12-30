// Set the launch date to January 1, 2025
var launchDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = launchDate - now;

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    var seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    // Display the result
    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // When the countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML =
            "We are live!";
    }
}, 1000);