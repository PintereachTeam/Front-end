import React, { useState, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Board from "./Board";
import AddBoardForm from "./AddBoardForm";
import { Link } from "react-router-dom";
import { articleReducer } from "../reducers/index.js";

const Boards = () => {
  // const [articles, setArticles] = useState([])
  const [boards, setBoards] = useState([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [board, setBoard] = useState([]);
  const [updateArticle, setUpdateArticle] = useState([]);
  const [state, dispatch] = useReducer(articleReducer);
  const [props, setProps] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(props => {
    axiosWithAuth()
      .get(`https://pintereach-backend.herokuapp.com/boards/${id}`)
      .then(response => {
        setBoards(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const deleteBoard = id => {
    axiosWithAuth()
      .delete(`https://pintereach-backend.herokuapp.com/boards/${id}`)
      .then(setBoards(boards.filter(item => item.id !== id)))
      .catch(err => console.log(err));
  };

  return (
    //want to return board name
    //return a list of articles assigned to board

    <div>
      <h1>My Boards</h1>
      <button onClick={_ => setAdding(!adding)}>
        {!adding ? "Add a Board" : "Close"}
      </button>
      {adding ? <AddBoardForm boards={boards} setBoards={setBoards} /> : null}
      {boards.map(boards => (
        <Link key={boards.id} to={`articles/${boards.id}`}>
          <Board key={boards.id} board={boards} />
        </Link>
      ))}
      <button className="btn" onClick={props.clearCompleted}>
        Clear Completed Boards Found
      </button>
    </div>
  );
};

export default Boards;
