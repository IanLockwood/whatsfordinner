'use client'

import React, { useEffect, useState } from 'react';
// import './game.css';

interface ClickMoveProps {
  currentPlayer: boolean;
  position: number;
}

type PlayerMark = 'x' | 'o' | '';

interface CheckIfWinnerProps {
  currentBoard: PlayerMark[];
}

interface WinningCombo {
  [index: number]: number;
  length: number;
}

export default function TicTacToe() {
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [gameBoard, setGameBoard] = useState<PlayerMark[]>(["", "", "", "", "", "", "", "", ""])
  const [winner, setWinner] = useState('none');

  const switchPlayer = () => setPlayerOneTurn(playerOneTurn ? false : true);

  const clickMove = ({ currentPlayer, position }: ClickMoveProps): void => {
    const marking: PlayerMark = currentPlayer ? 'x' : 'o';

    if (gameBoard[position]) {
      return;
    }

    const newGameBoardArray: PlayerMark[] = gameBoard.slice();
    newGameBoardArray[position] = marking;
    console.log("gameBoard:", gameBoard);
    console.log("newGameBoardArray:", newGameBoardArray);

    if (winner === 'none') {
      setGameBoard(newGameBoardArray);
      checkIfWinner(newGameBoardArray);
      switchPlayer();
    }
  }

  const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const checkIfWinner = (currentBoard: PlayerMark[]): void => {
    let isWinner: boolean = false;
    let winningPlayer: string = '';
    winningCombos.forEach((x: WinningCombo) => {
      if (
        currentBoard[x[0]] === 'x' &&
        currentBoard[x[1]] === 'x' &&
        currentBoard[x[2]] === 'x'
      ) {
        isWinner = true;
        winningPlayer = "X";
        console.log(winningPlayer);
        setWinner(winningPlayer);
      }

      if (
        currentBoard[x[0]] === 'o' &&
        currentBoard[x[1]] === 'o' &&
        currentBoard[x[2]] === 'o'
      ) {
        isWinner = true;
        winningPlayer = "O";
        setWinner(winningPlayer);
      }
    });
  }

  const resetGame = () => {
    setGameBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayerOneTurn(true);
    setWinner('none');
  }

  return (
    <div className="app">
      Let's play tic-tac-toe!

      { winner !== 'none' &&
        <p>Player {winner} wins!</p>
      }
      
      <div className="content">
        Game code!

        <div className='gameGrid'>
          {gameBoard.map((x, i) =>
            <div key={i} onClick={() => clickMove({ currentPlayer: playerOneTurn, position: i })}>{x}</div>
          )}
        </div>

        { winner === 'none' &&
        <p>It's your turn, {playerOneTurn ? 'Player X' : 'Player O'}!</p>
        }

        <button onClick={() => resetGame()}>
          Play Again!
        </button>

      </div>
      
    </div>
  )
}

