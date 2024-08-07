// script.js
window.onload = function() {
    // Hide loading screen
    document.getElementById("loading").style.display = "none";

    // Display current date and time
    displayDateTime();

    // Load scripts
    if (document.getElementById('scripts-list')) {
        loadScripts();
    }
};

function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const now = new Date().toLocaleDateString('en-US', options);
    dateTimeElement.textContent = now;
    setTimeout(displayDateTime, 1000); // Update every second
}

let scriptClicks = JSON.parse(localStorage.getItem('scriptClicks')) || {};

// Function to load scripts dynamically
function loadScripts() {
    const scripts = [
        { id: 1, name: "Dragon Slayer", description: "A powerful script for defeating dragons.", img: "script1.png" },
        { id: 2, name: "Treasure Hunter", description: "Find hidden treasures with ease.", img: "script2.png" }
    ];

    const scriptsList = document.getElementById('scripts-list');
    scripts.forEach(script => {
        const scriptElement = document.createElement('div');
        scriptElement.classList.add('script-item');
        scriptElement.innerHTML = `
            <img src="${script.img}" alt="${script.name}">
            <h3>${script.name}</h3>
            <p>${script.description}</p>
            <button onclick="handleClick(${script.id})">View Script</button>
            <span>Clicks: <span id="clicks-${script.id}">${scriptClicks[script.id] || 0}</span></span>
        `;
        scriptsList.appendChild(scriptElement);
    });
}

// Function to handle clicks
function handleClick(scriptId) {
