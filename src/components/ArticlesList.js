import React, {useState, useEffect}from "react";
import ArticleCard from "./ArticleCard";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddArticleForm from "./AddArticleForm"

const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedArticles")));
  const [adding, setAdding] = useState(false)

  const deleteArticle = id => {
    axiosWithAuth().delete(`https://pintereach-backend.herokuapp.com/articles/${id}`)
        .then(r => 
          setArticles(articles.filter(item => item.id !== id))
          )
        .catch(err => console.log(err))
    }

    const saveArticle = article => {
      setSaved([...saved, article])

      localStorage.setItem("savedArticles", JSON.stringify([...saved, article]));
 
      console.log(saved)
    }

    


  useEffect(()=> {
    axiosWithAuth().get('https://pintereach-backend.herokuapp.com/articles')
    .then(response => {
      console.log(response.data)
      setArticles(response.data)
    })
    .catch(error => console.log(error))
  },[]);

  return(
    <div>
      <h1>Articles</h1>
      <button onClick={_ => setAdding(!adding)}>{!adding ? "Add New Article" : "Close"}</button>
            {adding ? <AddArticleForm articles={articles} setArticles={setArticles} /> : null}
      {articles.map(articles => 
      <ArticleCard 
        key={articles.id} 
        deleteArticle={deleteArticle} 
        saveArticle={saveArticle}
        article={articles} 

        />)}
    </div>
  )
}
export default ArticlesList;
