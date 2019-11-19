import React from "react";
import { Card, Icon, Button } from "antd";
import Microlink from "@microlink/react";

const ArticleCard = props => {
  const {
    id,
    mustRead,
    title,
    summary,
    category,
    setMustRead,
    deleteArticle,
    link
  } = props;
  const { Meta } = Card;

  return (
    <Card
      hoverable={true}
      cover={<Microlink url={link} />}
      actions={[
        <Button
          type={mustRead ? "primary" : "dashed"}
          onClick={() => setMustRead(id)}
        >
          Must Read
        </Button>,
        <Button onClick={() => deleteArticle(id)}>
          <Icon type="delete" />
        </Button>
      ]}
    >
      <Meta
        title={title}
        description={<p style={{ height: "5rem" }}>{summary}</p>}
      />
      <div>
        <hr
          style={{
            margin: "1rem"
          }}
        ></hr>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "baseline"
          }}
        >
          <Icon type="tag" />
          <p>{category}</p>
        </span>
      </div>
    </Card>
  );
};

export default ArticleCard;
