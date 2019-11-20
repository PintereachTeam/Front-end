import React, {useState, useEffect} from 'react'; 
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Board from './Board';
import AddBoardForm from "./AddBoardForm"


const Boards = () => {
    const [articles, setArticles] = useState([])
    const [boards, setBoards] = useState([]);
    const [adding, setAdding] = useState(false);

    useEffect(()=>{
    axiosWithAuth().get('https://pintereach-backend.herokuapp.com/boards')
    .then(response => {
        console.log('hello form inside axios',response.data)
        setBoards(response.data)
    })
    .catch(error => console.log(error))
},[]);

    return(
        //want to return board name
        //return a list of articles assigned to board
        
        <div>
            
            <h1>My Boards</h1>
            <button onClick={_ => setAdding(!adding)}>{!adding ? "Add a Board" : "Close"}</button>
            {adding ? <AddBoardForm /> : null}
            {boards.map(boards => <Board key={boards.id} board={boards}/>)}
        </div>
        
        
    )
}

export default Boards;