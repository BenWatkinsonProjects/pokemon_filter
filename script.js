// Pokémon Dataset (Array of Objects)
const pokemonData = [
    { name: "Charmander", type: "Fire", hp: 39 },
    { name: "Bulbasaur", type: "Grass", hp: 45 },
    { name: "Squirtle", type: "Water", hp: 44 },
    { name: "Vulpix", type: "Fire", hp: 38 },
    { name: "Oddish", type: "Grass", hp: 50 },
    { name: "Psyduck", type: "Water", hp: 52 }
];

// Function to display Pokémon in the table
function displayPokemon(filterType) {
    const tableBody = document.getElementById("pokemonTable");
    tableBody.innerHTML = ""; // Clear table before inserting new rows

    const filteredPokemon = filterType === "All" 
        ? pokemonData 
        : pokemonData.filter(pokemon => pokemon.type === filterType);

    filteredPokemon.forEach(pokemon => {
        const row = `<tr>
                        <td>${pokemon.name}</td>
                        <td>${pokemon.type}</td>
                        <td>${pokemon.hp}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Event Listener for Dropdown Changes
document.getElementById("filter").addEventListener("change", function() {
    displayPokemon(this.value);
});

// Initial Display (Show all Pokémon at start)
displayPokemon("All");

// Function to get type color
function getTypeColor(type) {
    const colors = {
        Fire: "#FF5733",  // Red-orange
        Water: "#3498DB", // Blue
        Grass: "#27AE60", // Green
        Electric: "#F4D03F" // Yellow
    };
    return colors[type] || "#ccc"; // Default gray if type is unknown
}

// Function to display Pokémon in the table
function displayPokemon(filterType) {
    const tableBody = document.getElementById("pokemonTable");
    tableBody.innerHTML = ""; // Clear table before inserting new rows

    const filteredPokemon = filterType === "All" 
        ? pokemonData 
        : pokemonData.filter(pokemon => pokemon.type === filterType);

    filteredPokemon.forEach(pokemon => {
        const row = `<tr style="background-color: ${getTypeColor(pokemon.type)};">
                        <td>${pokemon.name}</td>
                        <td>${pokemon.type}</td>
                        <td>${pokemon.hp}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Event Listener for Dropdown Changes
document.getElementById("filter").addEventListener("change", function() {
    displayPokemon(this.value);
});

// Initial Display (Show all Pokémon at start)
displayPokemon("All");

