import React from "react";



const ArticleCard = props => {
  const {} = props.article

    return(
      <div className='article_card'>
        <h3>{props.article.article_label}</h3>
        <a>{props.article.url}</a>
      </div>
    )

};

export default ArticleCard;
