$(document).ready(function() {
    $("#main-content").hide().fadeIn(2000);

    // Setting the footer date dynamically
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = today.toLocaleDateString("en-US", options);
    $("#footer p").text(dateString);
});
