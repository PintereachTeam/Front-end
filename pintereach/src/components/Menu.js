import React from "react";
import { Drawer, Button, Switch } from "antd";

export default function Menu(props) {
  const {
    articles,
    hideMenu,
    menuDisplay,
    showModal,
    filterMustRead,
    ApiUrl
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
      <div>
        <h3>Boards</h3>
        <Button
          block
          style={{ marginBottom: "5px" }}
          onClick={() =>
            ApiUrl("https://pintereach-backend.herokuapp.com/boards/boards")
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
                onClick={() => {
                  ApiUrl(
                    `https://pintereach-backend.herokuapp.com/articles/${board.id}`
                  );
                }}
              >
                {board}: {articles[board]}
              </Button>
            );
          })}
      </div>
      <div className="options">
        <h3>Options</h3>
        <h4>Must Read Only</h4>
        <Switch onClick={e => filterMustRead(e)} />
      </div>
    </Drawer>
  );
}
