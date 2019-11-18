import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Layout, Icon, PageHeader, BackTop } from "antd";
// import SearchForm from './SearchForm';

import ArticleList from "./ArticleList";
import ArticleModal from "./ArticleModal";
import Menu from "./Menu";

const { Header, Content } = Layout;

const Home = () => {
  const [articles, setArticles] = useState([]);

  // State to manage what is displayed on ArticleList
  const [originalArticles, setOriginalArticles] = useState([]);

  // console.log('1: articles === originalArticles', originalArticles === articles);
  // console.log(displayedArticles)

  // State for Menu, ArticleModal
  const [menuDisplay, setMenuDisplay] = useState({ visible: false });

  //ArticleModal state
  const [modalDisplay, setModalDisplay] = useState({ visible: false });

  // Toggle State
  const [toggleState, setToggleState] = useState(false);

  // Modal functions

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
    article.articleid = Date.now();
    // console.log(article)
    setArticles([...articles, article]);
    // setDisplayedArticles(articles);
    setModalDisplay({ visible: false });

    // console.log(articles)
  };

  // console.log(articles);

  // Card Functions

  const deleteArticle = id => {
    console.log(`delete clicked`);
    setArticles(articles.filter(article => article.articleid !== id));

    // setDisplayedArticles(articles)
    // POST updated article list
  };

  // Update for articleDisplay
  const setMustRead = articleid => {
    // console.log(`mustRead clicked`);
    // console.log(articleid)
    const idx = articles.findIndex(entry => entry.articleid === articleid);
    // console.log(index)
    // articles[index].mustRead = !articles[index].mustRead;
    const updatedArticleList = [...articles];
    updatedArticleList[idx].mustRead = !updatedArticleList[idx].mustRead;
    setArticles(updatedArticleList);
    // console.log(`item at index ${index} marked Must Read`)
    // console.log('2: articles === originalArticles', originalArticles === articles);
  };

  // Menu functions
  const showMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: true });
  };

  const hideMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: false });
  };

  // Update for articleDisplay
  const filterMustRead = e => {
    if (e) {
      setArticles([...articles].filter(article => article.mustRead === true));
    } else {
      setArticles(originalArticles);
    }
  };

  const [apiUrl, setApiUrl] = useState(
    "https://pintereach-backend.herokuapp.com/articles/articles"
  );

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        setArticles([...response.data]);
        setOriginalArticles([...response.data]);
        // setDisplayedArticles to articles
        // setDisplayedArticles(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [apiUrl]);

  return (
    <Layout>
      <PageHeader>
        <Button
          onClick={() => showMenu()}
          style={{ margin: "1rem", width: "4rem", height: "3rem" }}
        >
          <Icon type="menu" />
        </Button>

        {/* <SearchForm articles={articles} displayedArticles={displayedArticles} setDisplayedArticles={setDisplayedArticles} /> */}
      </PageHeader>

      <Menu
        showMenu={showMenu}
        hideMenu={hideMenu}
        menuDisplay={menuDisplay}
        articles={articles}
        showModal={showModal}
        filterMustRead={filterMustRead}
        setApiUrl={setApiUrl}
      />

      <ArticleModal
        addArticle={addArticle}
        modalDisplay={modalDisplay}
        hideModal={hideModal}
      />

      <Content
        style={{
          display: "flex",
          paddingBottom: "10rem",
          justifyContent: "center"
        }}
      >
        <div>
          <BackTop />
          <strong style={{ color: "rgba(64, 64, 64, 0.6)" }}> </strong>
        </div>

        <ArticleList
          articles={articles}
          setMustRead={setMustRead}
          deleteArticle={deleteArticle}
        />
      </Content>
    </Layout>
  );
};

export default Home;
