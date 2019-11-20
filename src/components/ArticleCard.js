import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";



const ArticleCard = props => {
  const article = props.article;
  



  

    return(
      <div className='article_card'>
        <h3>{article.article_label}</h3>
        <a href={article.url}>{article.url}</a>
        <button onClick={ _ => props.deleteArticle(article.id)}>Delete Article</button>
        <button onClick={ _ => props.saveArticle(article)}>Save Article</button>
      </div>
    )

};

export default ArticleCard;
