import React from "react";
import './styles/Board.css';
import Square from "./Square";
import { useState } from 'react'


function Board() {
  const [squares, setSquares ] = useState(Array(9).fill(null)); 
  const [NextPlayer, setNextPlayer] = useState("X")
  const winner = findWinner(squares);

    function renderSquare(i) {
        return <Square squareValue = {squares[i]} Clicked={()=>{
          if(winner) {
              return
            }
          if(squares[i]) {
            return
          }

          const newSquares = squares.slice();
          newSquares[i] = NextPlayer
          setSquares(newSquares)

          if(NextPlayer == "X") {
            setNextPlayer("O")
          } else {
            setNextPlayer("X")
          }
  
        }}/>;
    }

    function findWinner(squares) {
      const winningCombos = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < 2; i++) {
        const [j, k, l] = winningCombos[i];
        if (squares[j] && squares[j] === squares[k] && squares[j] === squares[l]) {
          return squares[j];
        }
      }
      return null;
    }

    function GameStatus() {
      if(winner) {
        if(NextPlayer == "X") {
          return "O is the winner!"
        } else {
          return "X is the winner!"
        }
      } else {
        return "Next Player: " + NextPlayer
      }
    }
    

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">
            <p>{GameStatus()}</p>
            </div>
        </div>
    )
}

export default Board;
