// List of developer names and their associated links
const developers = {
    "Anthony": "https://www.anthony-portfolio.com",
    "Riad": "Riad_Portfolio/Riad.html",
    "Alexander": "https://www.alexander-portfolio.com",
    "Brenda": "https://www.brenda-portfolio.com",
    "Andrew": "https://www.andrew-portfolio.com"
};

// Create buttons for each developer
function createDeveloperButtons() {
    const developerButtonsContainer = document.getElementById('developerButtons');

    Object.keys(developers).forEach((developer) => {
        const button = document.createElement('button');
        button.innerText = developer;
        button.onclick = function() {
            displayDeveloperLink(developer);
        };
        developerButtonsContainer.appendChild(button);
    });
}

// Display the developer's link and navigate to it when a button is clicked
function displayDeveloperLink(developer) {
    // Redirect the user directly to the portfolio
    window.location.href = developers[developer];
}

// Call the function to generate the developer buttons when the page loads
window.onload = createDeveloperButtons;

// Validate login credentials
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUsernames = ["anthony", "riad", "alexander", "brenda"];
    const validPassword = "1";

    if (!username || !password) {
        alert("You cannot leave it blank.");
    } else if (validUsernames.includes(username.toLowerCase()) && password === validPassword) {
        window.location.href = "Gratitude.html";
    } else {
        alert("Invalid username or password.");
    }
}