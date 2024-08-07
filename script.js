$(document).ready(function() {
    // Show the #mugen form with a fade-in effect
    $("#mugen").hide().fadeIn(3000);
    
    // Set the background color of #text_box
    $("#text_box").css('background-color', 'black');
});

$(function() {
    // Autocomplete feature for #text_box
    var list = ["Option2", "Dragons"];
    $("#text_box").autocomplete({
        source: list
    });
});

// Improved Date Display
$(function() {
    var t1 = document.getElementById("time");
    var currentDate = new Date();
    
    // Options for formatting the date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    t1.innerHTML = currentDate.toLocaleDateString("en-US", options);
});
