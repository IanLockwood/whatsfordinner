import WeatherWidget from "components/WeatherWidget/WeatherWidget";

export default function ExperimentsWrapper() {
  return (
    <div>
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Experiments</h1>
            <div className="
                grid
                grid-rows-[20px_1fr_20px]
                p-8
                pb-0
                gap-16
            ">
                <main className="flex flex-col row-start-1 items-center w-full w-max-[1200px]">
                  <div className="w-full max-w-[1200px] rounded-lg shadow-md p-6">
                    <p>Try something out!</p>
                  </div>
                </main>
            </div>
        </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react'
// import './game.css'

// // requirements

// // 2 player game
//   // which player's turn
// // display which player's turn

// // render 3x3 game board
// // clicking the tile captures the move
// // cannot overwrite position

// // determine if winner after each move
// // if winner, display, declare over
// // stretch - reset

// // extra credit
// // capture gameplay history
// // pretend game is connected to server


// function Game() {
//   const [playerOneTurn, setPlayerOneTurn] = useState(true);
//   const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""])
//   const [winner, setWinner] = useState('none');

//   const switchPlayer = () => setPlayerOneTurn(playerOneTurn ? false : true);

//   const clickMove = (currentPlayer, position) => {
//     const marking = currentPlayer ? 'x' : 'o';

//     if (gameBoard[position]) {
//       return
//     }

//     const newGameBoardArray = gameBoard.slice();
//     newGameBoardArray[position] = marking;
//     console.log("gameBoard:", gameBoard);
//     console.log("newGameBoardArray:", newGameBoardArray);

//     if (winner === 'none') {
//       setGameBoard(newGameBoardArray);
//       checkIfWinner(newGameBoardArray);
//       switchPlayer();
//     }
//   }

//   const winningCombos = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
//   ]

//   const checkIfWinner = (currentBoard) => {
//     let isWinner = false;
//     let winningPlayer = '';
//     winningCombos.forEach((x) => {
//       if ((
//         (currentBoard[x[0]] === 'x') &&
//         (currentBoard[x[1]] === 'x') &&
//         (currentBoard[x[2]] === 'x')
//         )) {

//         isWinner = true;
//         winningPlayer = "X";
//         console.log(winningPlayer)
//         setWinner(winningPlayer)
//       }

//       if ((
//         (currentBoard[x[0]] === 'o') &&
//         (currentBoard[x[1]] === 'o') &&
//         (currentBoard[x[2]] === 'o')
//         )) {

//         isWinner = true;
//         winningPlayer = "O";
//         setWinner(winningPlayer)
//       }
//     })

//     // POST {
//       // gameboard: [],
//       // playerOneTurn: bool,
//       // turnOrder: Arr,
//       // winner: string,
//       // id: int
//     // }
//   }

//   const resetGame = () => {
//     setGameBoard(["", "", "", "", "", "", "", "", ""]);
//     setPlayerOneTurn(true);
//     setWinner('none');
//   }

//   // useEffect
//     // GET
//       // gameboard: [],
//       // playerOneTurn: bool,
//       // turnOrder: Arr,
//       // winner: string,
//       // id: int

  
//   return (
//     <div className="app">
//       Let's play tic-tac-toe!

//       { winner !== 'none' &&
//         <p>Player {winner} wins!</p>
//       }
      
//       <div className="content">
//         Game code!

//         <div className='gameGrid'>
//           {gameBoard.map((x, i) =>
//             <div key={i} onClick={() => clickMove(playerOneTurn, i)}>{x}</div>
//           )}
//         </div>

//         { winner === 'none' &&
//         <p>It's your turn, {playerOneTurn ? 'Player X' : 'Player O'}!</p>
//         }

//         <button onClick={() => resetGame()}>
//           Play Again!
//         </button>

//       </div>
      
//     </div>
//   )
// }


// export default Game