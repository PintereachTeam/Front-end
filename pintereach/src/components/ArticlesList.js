import React, {useState,useEffect} from "react";
import Home from "./Home";
import Article from "./Article.js";
import axiosWithAuth from "../utils/axiosWithAuth";


 const ArticleList = props => {
   const [articles, setArticles] = useState([]);
   console.log("articles", articles);
    const [user, setUsers] = useState([]);

   useEffect(() => {
     axiosWithAuth()
       .get("https://pintereach-backend.herokuapp.com/articles")
       .then(res => {
         console.log(res.data);
         setArticles(res.data);
       })
       .catch(error => console.log(error));
   }, []);

   return (
     <div>
       {articles.map(articles => (
         <Article key={user.id} />
       ))}
     </div>
   );
 };

export default ArticleList;
