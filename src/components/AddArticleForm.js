import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export default function AddArticleForm({articles, setArticles}) {
    const id = localStorage.getItem("id");
    const [newArticle, setNewArticle] = useState({
        url: "",
        article_label: "",
        board_id: 0
    });
    const [boards, setBoards] = useState([])

    useEffect(()=>{
        axiosWithAuth().get(`https://pintereach-backend.herokuapp.com/boards/`)
        .then(response => {
            setBoards(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    },[]);


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post("https://pintereach-backend.herokuapp.com/articles/", newArticle)
            .then(r => {
                setArticles([...articles, newArticle])
                setNewArticle({
                    url: "",
                    article_label: "",
                    board_id: 0
                })
            })
            .catch(err => console.log(err))

    };



    const handleChange = e => {
        setNewArticle({
            ...newArticle,
            [e.target.name]: e.target.value,
         })
    };


    return (
        <div className="add-article-form">
        <h3>Add an Article to our Database:</h3>
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                placeholder="url"
                value={newArticle.url}
                name="url"
            />
            <input
                onChange={handleChange}
                placeholder="Article Description"
                value={newArticle.article_label}
                name="article_label"
            />
                      <input
                onChange={handleChange}
                placeholder="board Id"
                value={newArticle.board_id}
                name="board_id"
            />
        <button type="submit">Post Article</button>
        </form>
    </div>
    )
}
