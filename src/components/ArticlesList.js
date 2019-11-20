import React, {useState, useEffect}from "react";
import ArticleCard from "./ArticleCard";
import {axiosWithAuth} from '../utils/axiosWithAuth';


const ArticlesList = () => {
  const [articles, setArticles] = useState([])

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
      {articles.map(articles => <ArticleCard key={articles.id} article={articles} />)}
    </div>
  )
}
export default ArticlesList;
