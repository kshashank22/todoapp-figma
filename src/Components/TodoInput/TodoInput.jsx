import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoInput.css";
import TodoButton from "../TodoButton/TodoButton";

const TodoInput = ({
  setDisplay,
  todoInput,
  setTodoInput,
  todoList,
  setTodoList,
}) => {
  const cancelInput = () => {
    setTodoInput("");
    setDisplay(false);
  };

  const updatedTodoInput = (event) => {
    if (event.target.value !== " ") {
      setTodoInput(event.target.value);
    }
  };

  const addTodoTask = (event) => {
    event.preventDefault();
    if (todoInput.trim() !== "") {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: todoInput, status: false },
      ]);
      setTodoInput("");
    }
    setTodoInput("");
    setDisplay(false);
  };

  return (
    <form onSubmit={addTodoTask} className="todoInputContainer">
      <p className="addTodoDescription">Add Todo</p>
      <textarea
        className="textAreaStyling"
        value={todoInput}
        onChange={updatedTodoInput}
      ></textarea>
      <br />
      <div className="buttonContainer">
        <TodoButton
          value={"Cancel"}
          onclick={cancelInput}
          className={"buttonStyling buttonStylingCancel"}
        />
        <TodoButton
          type={"submit"}
          value={"Done"}
          onclick={addTodoTask}
          className={"buttonStyling buttonStylingDone"}
        />
      </div>
    </form>
  );
};

export default TodoInput;
