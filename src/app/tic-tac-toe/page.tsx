'use client'

import React, { useEffect, useState } from 'react';

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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100">
      <h1 className="text-xl font-bold mt-12 mb-4 text-purple-700">Let's play tic-tac-toe!</h1>
      
      <div className="flex flex-col items-center bg-white/80 p-10 rounded-lg shadow-xl border border-purple-100">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {gameBoard.map((x, i) =>
            <div
              key={i}
              onClick={() => clickMove({ currentPlayer: playerOneTurn, position: i })}
              className="w-24 h-24 flex items-center justify-center border-2 border-purple-200 text-4xl font-extrabold cursor-pointer bg-gradient-to-br from-white via-purple-50 to-blue-50 hover:from-purple-100 hover:to-pink-100 transition"
            >
              <span className={
                x === 'x'
                  ? "text-blue-400 drop-shadow"
                  : x === 'o'
                  ? "text-pink-400 drop-shadow"
                  : ""
              }>
                {x}
              </span>
            </div>
          )}
        </div>

        { winner === 'none' &&
          <p className="mb-4 text-xl text-purple-600">It's your turn, {playerOneTurn ? 'Player X' : 'Player O'}!</p>
        }

        { winner !== 'none' &&
          <p className="text-xl text-green-600 mb-4 font-bold">Player {winner} wins!</p>
        }

        <button
          onClick={() => resetGame()}
          className="px-30 py-3 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition text-lg shadow"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
