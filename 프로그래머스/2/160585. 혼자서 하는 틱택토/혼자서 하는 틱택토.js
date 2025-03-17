const solution = board => {
  const gameBoard = board.map(row => row.split(''));
  
  let countO = 0;
  let countX = 0;
  
  for (const row of gameBoard) {
    for (const cell of row) {
      if (cell === 'O') countO++;
      if (cell === 'X') countX++;
    }
  }
  
  if (countO < countX || countO > countX + 1) return 0;
  
  const checkWin = mark => {
    for (let i = 0; i < 3; i++) {
      if (gameBoard[i][0] === mark && gameBoard[i][1] === mark && gameBoard[i][2] === mark) return true;
      if (gameBoard[0][i] === mark && gameBoard[1][i] === mark && gameBoard[2][i] === mark) return true;
    }
    
    return (gameBoard[0][0] === mark && gameBoard[1][1] === mark && gameBoard[2][2] === mark) || 
           (gameBoard[0][2] === mark && gameBoard[1][1] === mark && gameBoard[2][0] === mark);
  };
  
  const oWins = checkWin('O');
  const xWins = checkWin('X');
  
  if (oWins && countO !== countX + 1) return 0;
  if (xWins && countO !== countX) return 0;
  if (oWins && xWins) return 0;
  
  return 1;
}