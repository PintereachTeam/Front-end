import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const Boards = () => {
    const [articles, setArticles] = useState([])
    const [boards, setBoards] = useState({
        id: 1,
        board_title: 'Boredom Testing',
        user_id: 3
    });

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
            {boards.map(board => {})}
        </div>
        
        
    )
}

export default Boards;