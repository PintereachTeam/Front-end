import React, {useState, useEffect} from 'react'; 
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Board from './Board';
import AddBoardForm from "./AddBoardForm"
import {Link} from "react-router-dom"


const Boards = () => {
    // const [articles, setArticles] = useState([])
    const [boards, setBoards] = useState([]);
    const [adding, setAdding] = useState(false);
    const [editing, setEditing] = useState(false);

    const id = localStorage.getItem("id");

    useEffect(()=>{
    axiosWithAuth().get(`https://pintereach-backend.herokuapp.com/boards/${id}`)
    .then(response => {
        setBoards(response.data)
    })
    .catch(error => console.log(error))
},[]);

    const deleteBoard = id => {
        axiosWithAuth().delete(`https://pintereach-backend.herokuapp.com/boards/${id}`)
        .then(setBoards(boards.filter(item => item.id !== id)))
        .catch(err => console.log(err))
    }

    return(
        //want to return board name
        //return a list of articles assigned to board
        
        <div className="profile-boards-list">
            <button onClick={_ => setAdding(!adding)}>{!adding ? "Add a Board" : "Close"}</button>
           
            
            {adding ? <AddBoardForm boards={boards} setBoards={setBoards} /> : null}
            <h1>My Boards</h1>
            <div className="boards-list">
            {boards.length > 0 ? boards.map(boards => 
            
                <div className="col s12 m6 boards-card">
                    <div className="card #4db6ac teal lighten-2">
                    <Link key={boards.id} to={`articles/${boards.id}`}>
                        <div className="card-content white-text">
                            <Board key={boards.id} board={boards}/>
                            <img src={`https://picsum.photos/300/200?random=${boards.id}`}/>
                        </div>
                    </Link>

                    <div className="card-action">
                        <button onClick={(e) => {e.stopPropagation(); deleteBoard(boards.id)}}>Delete Board</button>
                    </div>

                    </div>

                </div>
            )
            : <h5></h5>}
            </div>
        </div>
        
        
        
    )
}

export default Boards;