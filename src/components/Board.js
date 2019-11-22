import React from 'react';

const Board = (props) => {
const {} = props.board;
return(
    <div>
        <h3>{props.board.id}: {props.board.board_title}</h3>
    </div>
)

}
export default Board;