import React from "react";



const ArticleCard = props => {
  const article = props.article

    return(
      // <div className='card col s6'>
      //   <h3>{article.article_label}</h3>
      //   <a href={article.url}>{article.url}</a>
      // </div>

      <div className="col s12 m6">
        <div className="card #4db6ac teal lighten-2">
          <div className="card-content white-text">
            <span className="card-title">{article.article_label}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            
            <a className='deep-purple-text text-darken-4' href={article.url}>View Article</a>
          </div>
        </div>
      </div>

    )

};

export default ArticleCard;
