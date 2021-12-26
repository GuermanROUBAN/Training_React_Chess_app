import React from "react";

import "./Chessboard.css";

const horizontalAxes = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxes = ["1", "2", "3", "4", "5", "6", "7", "8"]

export default function Chessboard(){
    let board =[];

    for (let j=verticalAxes.length-1; j>=0; j-- ){
        for (let i=0; i<horizontalAxes.length; i++){
            const number = j+i+2
            if (number%2 ===0){
                board.push(
                    <div className="tile black-tile">
                        {/* [{horizontalAxes[i]} {verticalAxes[j]}] */}
                    </div>);
            }else{
                board.push(
                    <div className="tile white-tile">
                        {/* [{horizontalAxes[i]} {verticalAxes[j]}] */}
                    </div>
                    );
            }
        }
    }return <div id="chessboard">{board}</div>
}
    

