const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameFinished = false;

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent !== '' || gameFinished) {
    return;
  }
  cell.textContent = currentPlayer;
  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    gameFinished = true;
    return;
  }
  if (checkDraw()) {
    alert('Draw!');
    gameFinished = true;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const board = [];
  for (let i = 0; i < cells.length; i++) {
    board.push(cells[i].textContent);
  }
  if ((board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
      (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
      (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
      (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
      (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
      (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
      (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
      (board[2] ===
