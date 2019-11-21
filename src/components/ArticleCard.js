import React from "react";



const ArticleCard = props => {
  const article = props.article

    return(
      <div className='col s6'>
        <h3>{article.article_label}</h3>
        <a href={article.url}>{article.url}</a>
      </div>
    )

};

export default ArticleCard;
