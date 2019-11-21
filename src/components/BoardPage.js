import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export default function BoardPage(props) {
  const id = props.match.params.id;
  const [articles, setArticles] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [design, setDesign] = useState("");
  useEffect(() => {
    axiosWithAuth()
      .get(`https://pintereach-backend.herokuapp.com/articles/${id}`)
      .then(response => {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axiosWithAuth()
      .get(`https://pintereach-backend.herokuapp.com/boards`)
      .then(response => {
        setBoardName(
          response.data.filter(item => item.id == props.match.params.id)[0]
            .board_title
        );
        console.log(
          response.data.filter(item => item.id == props.match.params.id)[0]
            .board_title
        );
      })
      .catch(error => {
        console.log(error);
      });
    axiosWithAuth()
      .get(`https://pintereach-backend.herokuapp.com/boards`)
      .then(response => {
        setBoardName(
          response.data.filter(item => item.id == props.match.params.id)[0]
            .board_title
        );
        console.log(
          response.data.filter(item => item.id == props.match.params.id)[0]
            .board_title
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id]);

  return (
    <div>
      <h1>{boardName}</h1>
      {articles.map(item => (
        <div key={item.id} className="article-card">
          <h2>{item.article_label}</h2>
          <a href={item.url}>{item.url}</a>
        </div>
      ))}
    </div>
  );
}
