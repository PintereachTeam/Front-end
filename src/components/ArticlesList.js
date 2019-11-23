import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddArticleForm from "./AddArticleForm";

export const ArticlesList = () => {
  const [saved, setSaved] = useState(
    JSON.parse(localStorage.getItem("savedArticles"))
  );
  const [adding, setAdding] = useState(false);
  const [props, setProps] = useState;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://pintereach-backend.herokuapp.com/articles")
      .then(response => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const saveArticle = article => {
    setSaved([...saved, article]);

    localStorage.setItem("savedArticles", JSON.stringify([...saved, article]));

    console.log(saved);
  };

  return (
    <>
      <h1>Articles</h1>
      <button onClick={_ => setAdding(!adding)}>
        {!adding ? "Add New Article" : "Close"}
      </button>
      {adding ? (
        <AddArticleForm articles={articles} setArticles={setArticles} />
      ) : null}
      <div className="row">
        {articles.map(articles => (
          <ArticleCard
            key={articles.id}
            saveArticle={saveArticle}
            article={articles}
          />
        ))}
        <button className="btn" onClick={props.clearCompleted}>
          Clear Completed Articles Found
        </button>
      </div>
    </>
  );
};
export default ArticlesList;
