import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export default function AddBoardForm({boards, setBoards}) {

    const [newBoard, setNewBoard] = useState({
        url: "",
        board_label: "",
        user_id: Number(localStorage.getItem("id"))
    });


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post("https://pintereach-backend.herokuapp.com/boards/", newBoard)
            .then(r => {console.log(r)
                setBoards([...boards, newBoard])
                setNewBoard({
                    board_title: "",
                    user_id: Number(localStorage.getItem("id"))
                })

            })
            .catch(err => console.log(err))

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
          <button onClick="submit">Post Board</button>
          <button onClick="remove.item">delete</button>
        </form>
      </div>
    );
}
