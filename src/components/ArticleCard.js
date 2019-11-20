import React from "react";



const ArticleCard = props => {
  const {} = props.article

    return(
      <div className='article_card'>
        <h3>{props.article.article_label}</h3>
        <p>{props.article.url}</p>
      </div>
    )

};

export default ArticleCard;
