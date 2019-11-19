import React from "react";
import axios from "axios";
import { articles } from "../actions/actions";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Articles: ""
    };
  }

  deleteArticle = (id, user_id) => {
    this.setState({ deletingArticle: id });
    this.props.deleteArticle(id, user_id);
  };
  render() {
    return (
      <div className="articles">
        {this.props.articles.map(article => (
          <div className="article-card" key={article.id}></div>
        ))}
      </div>
    );
  }
}

export default Article;
