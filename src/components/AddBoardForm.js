import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export default function AddBoardForm(props) {

    const [newBoard, setNewBoard] = useState({
        url: "",
        board_label: "",
        board_id: 0
    });


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post("https://pintereach-backend.herokuapp.com/boards/", newBoard)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        setNewBoard({
            board_title: "",
            user_id: 0
        })
    };
    const handleChange = e => {
        setNewBoard({ 
            ...newBoard,
            [e.target.name]: e.target.value,
         })
    };


    return (
        <div className="add-board-form">
        <h3>Add a Board to our Database:</h3> 
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                placeholder="Board Title"
                value={newBoard.board_title}
                name="board_title"
            />
                      <input
                onChange={handleChange}
                placeholder="user Id"
                value={newBoard.user_id}
                name="user_id"
            />
        <button type="submit">Post Board</button> 
        </form>
    </div>
    )
}
