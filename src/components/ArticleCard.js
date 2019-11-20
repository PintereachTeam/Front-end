import React from "react";



const ArticleCard = props => {
  const article = props.article

    return(
      <div className='article_card'>
        <h3>{article.article_label}</h3>
        <a href={article.url}>{article.url}</a>
      </div>
    )

};

export default ArticleCard;
