// script.js
window.onload = function() {
    // Hide loading screen
    document.getElementById("loading").style.display = "none";

    // Load scripts
    loadScripts();
};

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
    const userClicked = localStorage.getItem(`clicked-${scriptId}`);
    
    if (!userClicked) {
        scriptClicks[scriptId] = (scriptClicks[scriptId] || 0) + 1;
        localStorage.setItem('scriptClicks', JSON.stringify(scriptClicks));
        localStorage.setItem(`clicked-${scriptId}`, 'true');
        document.getElementById(`clicks-${scriptId}`).textContent = scriptClicks[scriptId];
    }
}
