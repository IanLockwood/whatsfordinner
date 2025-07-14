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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Let's play tic-tac-toe!</h1>

      { winner !== 'none' &&
        <p className="text-lg text-green-600 mb-2">Player {winner} wins!</p>
      }
      
      <div className="flex flex-col items-center bg-white p-6 rounded shadow">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {gameBoard.map((x, i) =>
            <div
              key={i}
              onClick={() => clickMove({ currentPlayer: playerOneTurn, position: i })}
              className="w-16 h-16 flex items-center justify-center border border-gray-300 text-2xl font-bold cursor-pointer bg-gray-50 hover:bg-gray-200 transition"
            >
              {x}
            </div>
          )}
        </div>

        { winner === 'none' &&
          <p className="mb-2 text-gray-700">It's your turn, {playerOneTurn ? 'Player X' : 'Player O'}!</p>
        }

        <button
          onClick={() => resetGame()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Play Again!
        </button>
      </div>
    </div>
  )
}
