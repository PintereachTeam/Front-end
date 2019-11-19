import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";
// import SearchForm from './SearchForm';

import ArticleList from "./ArticlesList";

import Menu from "./Menu";

const { Content } = Layout;

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [originalArticles, setOriginalArticles] = useState([]);
  const [menuDisplay, setMenuDisplay] = useState({ visible: false });
  const [modalDisplay, setModalDisplay] = useState({ visible: false });
  const [toggleState, setToggleState] = useState(false);

  const showModal = () => {
    // console.log(modalDisplay);
    setModalDisplay({ visible: true });
  };

  const hideModal = () => {
    // console.log(modalDisplay);
    setModalDisplay({ visible: false });
  };

  const addArticle = article => {
    // console.log('submit and add article pressed')
    console.log(`article in addArticle: ${article}`);
    setArticles([...articles, article]);
    // setDisplayedArticles(articles);
    setModalDisplay({ visible: false });

    // console.log(articles)
  };

  const deleteArticle = id => {
    console.log(`delete clicked`);
    setArticles(articles.filter(article => article.articleid !== id));
  };

  const setMustRead = articleid => {
    const idx = articles.findIndex(entry => entry.articleid === articleid);

    const updatedArticleList = [...articles];
    updatedArticleList[idx].mustRead = !updatedArticleList[idx].mustRead;
    setArticles(updatedArticleList);
  };

  const showMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: true });
  };

  const hideMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: false });
  };

  const filterMustRead = e => {
    if (e) {
      setArticles([...articles].filter(article => article.mustRead === true));
    } else {
      setArticles(originalArticles);
    }
  };

  useEffect(() => {
    axios
      .get("https://pintereach-backend.herokuapp.com/articles/articles")
      .then(response => {
        setArticles([...response.data]);
        setOriginalArticles([...response.data]);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <Layout>
      <button onClick={() => showMenu()}
      ></button>

      {/* <SearchForm articles={articles} displayedArticles={displayedArticles} setDisplayedArticles={setDisplayedArticles} /> */}

      <Menu
        showMenu={showMenu}
        hideMenu={hideMenu}
        menuDisplay={menuDisplay}
        articles={articles}
        showModal={showModal}
        filterMustRead={filterMustRead}
      />

      <ArticleList
        articles={articles}
        setMustRead={setMustRead}
        deleteArticle={deleteArticle}
      />
    </Layout>
  );
};

export default Home;
