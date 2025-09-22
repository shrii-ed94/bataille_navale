const size = 6;
let grid = [];
let ships = [];

// fonction sur la création de la de la grille
function createGrid() {
  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";
  grid = [];

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = "~";

      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", shoot);
      gameDiv.appendChild(cell);
    }
  }
}

// fonction sur le placement d'un bateau aléatoirement
function placeShip() {
  const x = Math.floor(Math.random() * size);
  const y = Math.floor(Math.random() * size);
  ships.push({ x, y, hit: false });
  grid[x][y] = "B";
}

// fonction sur le tire d'une case
function shoot(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  const ship = ships.find(s => s.x === row && s.y === col);

  if (ship && !ship.hit) {
    event.target.classList.add("hit"); // la case est rouge
    ship.hit = true;
    document.getElementById("message").textContent = "Touché !";
  } else if (grid[row][col] === "~") {
    event.target.classList.add("miss"); // la case est blanche
    grid[row][col] = "O";
    document.getElementById("message").textContent = "À l'eau !";
  }
}

// lancement du jeu
createGrid();
placeShip();
