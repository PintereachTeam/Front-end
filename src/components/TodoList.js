import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="todo-list">
    <h1>Articles You Want To Look Up</h1>
      {props.todo.map((task, id) => (
        <Todo item={task} key={id} toggleItem={props.toggleItem} />
      ))}
      <button className="btn" onClick={props.clearCompleted}>
        Clear Completed Articles Found
      </button>
    </div>
  );
};

export default TodoList;
