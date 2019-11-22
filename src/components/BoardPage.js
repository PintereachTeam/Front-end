import React, {useState, useEffect} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import kevin from "../img/kevinglasses.png"

export default function BoardPage(props) {
    const id = props.match.params.id;
    const [articles, setArticles] = useState([]);
    const [boardName, setBoardName] = useState("");
    useEffect(() => {
        axiosWithAuth().get(`https://pintereach-backend.herokuapp.com/articles/${id}`)
            .then((response) => {
            setArticles(response.data);
            console.log(response.data);
            
        }).catch((error) => {
            console.log(error);
        })
        axiosWithAuth().get(`https://pintereach-backend.herokuapp.com/boards`)
            .then((response) => {
                setBoardName(response.data.filter(item => item.id === props.match.params.id)[0].board_title);
                console.log(response.data.filter(item => item.id === props.match.params.id)[0].board_title);
            
        }).catch((error) => {
            console.log(error);
        })

    }, [props.match.params.id])


    const deleteArticle = id => {
        axiosWithAuth().delete(`https://pintereach-backend.herokuapp.com/articles/${id}`)
            .then(r => 
              setArticles(articles.filter(item => item.id !== id))
              )
            .catch(err => console.log(err))
        }
    
    return (
        <div>
        <h1>{id}: {boardName}</h1>
            <div className="boards-list">
        {articles.map(article =>
            <div className="col s12 m6 boards-card">
            <div className="card #4db6ac teal lighten-2">
              <div className="card-content white-text">
                <span className="card-title">{article.article_label}</span>
                {article.id === 17 
                ? <img src={kevin}></img>
                : <img src={`https://picsum.photos/300/200?random=${article.id}`}/>}
              </div>
              <div className="card-action">
                
                <a className='deep-purple-text text-darken-4' href={article.url}>View Article</a>
                <button onClick={_ => deleteArticle(article.id)}>Delete Article</button> 
              </div>
    
            </div>
    
          </div>
        
            
            )}
            </div>
        </div>)

}