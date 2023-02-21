// Get all the cells in the Tic Tac Toe grid
const cells = document.querySelectorAll('#cell-0, #cell-1, #cell-2, #cell-3, #cell-4, #cell-5, #cell-6, #cell-7, #cell-8');

// Initialize the game state
let currentPlayer = 'X';
let gameStatus = 'Game On';

// Loop through each cell in the grid and add a click event listener
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

// Handle a cell being clicked
function handleCellClick(event) {
  // Get the clicked cell
  const cell = event.target;

  // Check if the cell is empty and the game is still on
  if (cell.textContent === '' && gameStatus === 'Game On') {
    // Mark the cell with the current player's symbol (X or O)
    cell.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin()) {
      // Display a message indicating the winner
      document.getElementById('game-status').textContent = `Player ${currentPlayer} has won!`;

      // Set the game status to "Game Over"
      gameStatus = 'Game Over';
    } else if (checkTie()) {
      // Display a message indicating a tie
      document.getElementById('game-status').textContent = 'It is a tie!';

      // Set the game status to "Game Over"
      gameStatus = 'Game Over';
    } else {
      // Switch to the other player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

      // Update the game status message
      document.getElementById('game-status').textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

// Check if the current player has won
function checkWin() {
  // Define all possible winning combinations
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check if any of the winning combinations have been achieved by the current player
  return winningCombos.some(combo => {
    return combo.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

// Check if the game is tied
function checkTie() {
  // Check if all cells are filled with X or O
  return Array.from(cells).every(cell => {
    return cell.textContent === 'X' || cell.textContent === 'O';
  });
}
