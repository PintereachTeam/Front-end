import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

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
    <>
      <Modal
        title="Add New Article"
        visible={modalDisplay.visible}
        onCancel={hideModal}
        footer={[
          <Button
            form="articleForm"
            key="submit"
            htmlType="submit"
            onClick={clickAddArticle}
          >
            Add Article
          </Button>
        ]}
      >
        <Form>
          <label htmlFor="URL">URL</label>
          <Input
            type="text"
            name="link"
            value={article.link}
            onChange={handleInputChange}
          />
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            name="title"
            value={article.title}
            onChange={handleInputChange}
          />
          <label htmlFor="summary">Summary</label>
          <Input
            type="text"
            name="summary"
            value={article.summary}
            onChange={handleInputChange}
          />
          <label htmlFor="category">Tags</label>
          <Input
            type="text"
            name="category"
            value={article.category}
            onChange={handleInputChange}
          />
        </Form>
      </Modal>
    </>
  );
}
