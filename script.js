const size = 8;
let playerGrid = [];
let enemyGrid = [];
let enemyShips = [];

// fonction sur la création de la de la grille
function createGrid(boardId, clickable = false) {
  const boardDiv = document.getElementById(boardId);
  boardDiv.innerHTML = "";
  let grid = [];

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = "~";

      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;

      if (clickable) {
        cell.addEventListener("click", shoot);
      }

      boardDiv.appendChild(cell);
    }
  }
  return grid;
}

// fonction sur le placement de 3 bateaux aléatoires
function placeShips(grid, shipsArray, count = 3) {
  let placed = 0;
  while (placed < count) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    if (grid[x][y] === "~") {
      grid[x][y] = "B";
      shipsArray.push({ x, y, hit: false });
      placed++;
    }
  }
}

// fonction sur les tirs sur la grille ennemie
function shoot(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  const ship = enemyShips.find(s => s.x === row && s.y === col);

  if (ship && !ship.hit) {
    event.target.classList.add("hit"); // la case est rouge
    ship.hit = true;
    document.getElementById("message").textContent = "Touché !";
  } else if (enemyGrid[row][col] === "~") {
    event.target.classList.add("miss"); // la case est blanche
    enemyGrid[row][col] = "O";
    document.getElementById("message").textContent = "À l'eau !";
  }
}

// lancement du jeu
function startGame() {
  playerGrid = createGrid("player-board", false);
  enemyGrid = createGrid("enemy-board", true);
  enemyShips = [];

  placeShips(playerGrid, [], 3); 
  placeShips(enemyGrid, enemyShips, 3);

  document.getElementById("message").textContent = "Nouvelle partie !";
}

// bouton pour rejouer
document.getElementById("restart").addEventListener("click", startGame);

// démarrage initial
startGame();

