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

    return(
        //want to return board name
        //return a list of articles assigned to board
        
        <div className="profile-boards-list">
            <button onClick={_ => setAdding(!adding)}>{!adding ? "Add a Board" : "Close"}</button>
            <h1>My Boards</h1>
            
            {adding ? <AddBoardForm boards={boards} setBoards={setBoards} /> : null}
            {boards.length > 0 ? boards.map(boards => 
            <Link key={boards.id} to={`articles/${boards.id}`}>
                <div className="col s12 m6 boards-card">
                    <div className="card #4db6ac teal lighten-2">
                        <div className="card-content white-text">
                            <Board key={boards.id} board={boards}/>
                            <img src={`https://picsum.photos/300/200?random=${boards.id}`}/>
                        </div>
                    <div className="card-action">
                        <button>Delete Board</button>
                    </div>

                    </div>

                </div>
            </Link>)
            : <h5></h5>}
        </div>
        
        
        
    )
}

export default Boards;