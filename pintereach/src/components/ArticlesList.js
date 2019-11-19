import React from "react";
import { Row, Col } from "antd";

function ArticleList({ articles, setMustRead, deleteArticle }) {
  return (
    <Row
      ctype="flex"
      justify="space-around"
      gutter={16}
      style={{ margin: "1rem", width: "auto" }}
    >
      {articles.map(entry => (
        <Col
          span={8}
          key={entry.articleid}
          style={{
            marginBottom: "2rem"
          }}
        ></Col>
      ))}
    </Row>
  );
}
export default ArticleList;
