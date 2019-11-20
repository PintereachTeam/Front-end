import React, { useState } from "react";
import ArticlesList from './ArticlesList';

export default function Article(props) {
  const { hideModal, addArticle, modalDisplay } = props;

  const initialFormState = {
    articleid: "",
    link: "",
    title: "",
    summary: "",
    board: ""
  };

  // State to handle content of article form

  const [article, setArticle] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
    console.log(article);
  };

  const clickAddArticle = e => {
    e.preventDefault();
    addArticle(article);
    setArticle(initialFormState);
  };

  return (
    <ArticlesList/>
  );
}
