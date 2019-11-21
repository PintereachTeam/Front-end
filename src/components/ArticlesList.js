import React, {useState, useEffect}from "react";
import ArticleCard from "./ArticleCard";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddArticleForm from "./AddArticleForm"

const ArticlesList = () => {

  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedArticles")));
  const [adding, setAdding] = useState(false)

  const [articles, setArticles] = useState([])
  useEffect(()=> {
    axiosWithAuth().get('https://pintereach-backend.herokuapp.com/articles')
    .then(response => {
      console.log(response.data)
      setArticles(response.data)
    })
    .catch(error => console.log(error))
  },[]);



    const saveArticle = article => {
      setSaved([...saved, article])

      localStorage.setItem("savedArticles", JSON.stringify([...saved, article]));
 
      console.log(saved)
    }

    




  return( 
    <>
    <button onClick={_ => setAdding(!adding)}>{!adding ? "Add New Article" : "Close"}</button>
            {adding ? <AddArticleForm articles={articles} setArticles={setArticles} /> : null}
    <div className='row'>
      <h1>Articles</h1>
      
      {articles.map(articles => 
      <ArticleCard 
        key={articles.id} 
        saveArticle={saveArticle}
        article={articles} 

        />)}
    </div>
    </>
  )
}
export default ArticlesList;
