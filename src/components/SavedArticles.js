import React, {useState, useEffect} from 'react'; 

import ArticleCard from "./ArticleCard"


const Boards = () => {
    // const [articles, setArticles] = useState([])
    const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedArticles")))

    useEffect(()=>{
},[]);

    const deleteSaved = (id) => {
        console.log("running delete saved")
        setSaved(saved.filter(item => item.id !== id))
        localStorage.setItem("savedArticles", JSON.stringify(saved.filter(item => item.id !== id)));
    }


    console.log(saved)
    return(
        <div className="read-later-form">
            <h3>Read Later:</h3>
            {saved.map(article => 
                <div className='article_card'>
                    <h3>{article.article_label}</h3>
                    <a href={article.url}>{article.url}</a>
                    <button onClick={ _ => deleteSaved(article.id)}>I read this!</button>
                    
                </div>)}
        </div>
        
    )
}

export default Boards;