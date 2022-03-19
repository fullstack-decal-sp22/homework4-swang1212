import React from "react";
import './styles/Square.css';



function Square({squareValue, Clicked}) {
    return (
        <button className="square" onClick={Clicked}>
            {squareValue}
        </button>
    )
}

export default Square;
