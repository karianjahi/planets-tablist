const planetObj = Object();
planetObj["earth"] = "Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life.";

planetObj["saturn"] = "Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it.";

planetObj["mars"] = "Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life.";

const displayPlanetMsg = (planet) => {
    return planetObj[planet];
};

const buttons = document.querySelectorAll(".planet-button");
const planetMsg = document.getElementById("planet-message");

const earthButton = document.getElementById("earth-button");

planetMsg.textContent = displayPlanetMsg(earthButton.textContent.split(" ")[1].toLowerCase());
earthButton.classList.add("active")



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // remove the class active from any button that might be having it first
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
        // Do what you need to this button!
        const planetName = button.textContent.split(" ")[1].toLowerCase();
        planetMsg.textContent = displayPlanetMsg(planetName);
        button.classList.add("active");
    });
});