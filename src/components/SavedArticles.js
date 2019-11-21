import React, {useState, useEffect} from 'react'; 

import ArticleCard from "./ArticleCard"


const Boards = () => {
    // const [articles, setArticles] = useState([])
    const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedArticles")))

    useEffect(()=>{
        console.log(saved)
},[]);

    const deleteSaved = (id) => {
        console.log("running delete saved")
        setSaved(saved.filter(item => item.id !== id))
        localStorage.setItem("savedArticles", JSON.stringify(saved.filter(item => item.id !== id)));
    }


    console.log(saved)
    return(
        <div className="read-later-form">
            {saved.length >0
            ? <h3>Read Later:</h3>
            : null}
            {saved.map(article => 
                <div className="col s12 m6">
                <div className="card #4db6ac teal lighten-2 saved-article">
                  <div className="card-content white-text">
                    <span className="card-title">{article.article_label}</span>
                    <img src={`https://picsum.photos/300/200?random=${article.id}`}/>
                  </div>
                  <div className="card-action">
                    
                    <a className='deep-purple-text text-darken-4' href={article.url}>View Article</a>
                    <button onClick={ _ => deleteSaved(article.id)}>I read this!</button>
                  </div>
        
                </div>
        
              </div>)}
        </div>
        
    )
}

export default Boards;