import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export default function AddArticleForm(props) {

    const [newArticle, setNewArticle] = useState({
        url: "",
        article_label: "",
        board_id: 0
    });


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post("https://pintereach-backend.herokuapp.com/articles/", newArticle)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        setNewArticle({
            url: "",
            article_label: "",
            board_id: 0
        })
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
