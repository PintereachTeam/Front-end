import React from "react";
import { Drawer, Button, Switch } from "antd";

export default function Menu(props) {
  const {
    articles,
    hideMenu,
    menuDisplay,
    showModal,
    filterMustRead,
    setApiUrl
  } = props;

  const board = articles
    .map(article => article.board)
    .reduce((acc, currValue) => {
      acc[currValue] ? acc[currValue]++ : (acc[currValue] = 1);
      return acc;
    }, {});

  return (
    <Drawer
      title="Menu"
      placement="left"
      closable={true}
      onClose={hideMenu}
      visible={menuDisplay.visible}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0"
        }}
      >
        <Button
          onClick={() => {
            hideMenu();
            showModal();
          }}
        >
          Add Article
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          margin: "2rem 0"
        }}
      >
        <h3>Boards</h3>
        <Button
          block
          style={{ marginBottom: "5px" }}
          onClick={() =>
            setApiUrl(
              "https://pintereach-backend.herokuapp.com/articles/articles"
            )
          }
        >
          All
        </Button>
        {Object.keys(board)
          .sort()
          .map(category => {
            return (
              <Button
                block
                key={board}
                style={{ marginBottom: "5px" }}
                onClick={() => {
                  setApiUrl(
                    `https://pintereach-backend.herokuapp.com/articles/${board.id}`
                  );
                }}
              >
                {board}: {board[board]}
              </Button>
            );
          })}
      </div>
      <div className="options">
        <h3>Options</h3>
        <h4 style={{ display: "inline-block", marginRight: "50px" }}>
          Must Read Only
        </h4>
        <Switch onClick={e => filterMustRead(e)} />
      </div>
    </Drawer>
  );
}
