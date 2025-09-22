// Création de lagrille 5x5
let size = 5;
let grid = [];

for (let i = 0; i <= size; i++) { 
    grid[i] = [];
    for (let j = 0; j < size; j++) {
        grid[i][j] = "~"; // représentation de l'eau
    }
}

// fonction placer un bateau
function placeBoat(x, y) {
    if(x < 0 || y < 0 || x > size || y > size) { 
        alert("Position invalide !");
        return;
    }
    grid[x][y] = "B";
}

// fonction tire sur la grille
function shoot(x, y) {
    let cell = grid[x][y];
    if(cell === "B") {
        grid[x][y] = "X";
        return treu;
    } else {
        grid[x][y] = "O";
        return false;
    }
}

// affichage de la grille dans le HTML
function printGrid() {
    let gameDiv = document.getElementById("game");
    gameDiv.innerHTML = "";
    for (let row of grid) {
        gameDiv.innerHTML += row.join(" ") + "<br>";
    }
}

// test du jeu
placeBoat(1,1);
shoot(2,2);
printGrid();
