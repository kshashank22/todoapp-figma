import React, { useState, useEffect } from "react";
import "./TodoAppPage.css";
import TodoInput from "../../Components/TodoInput/TodoInput";
import TodoListItems from "../../Components/TodoListItems/TodoListItems";
import TodoButton from "../../Components/TodoButton/TodoButton";
import TodoFilters from "../../Components/TodoFilters/TodoFilters";

function TodoAppPage() {
  const [display, setDisplay] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoFilter, setTodoFilter] = useState("All");
  const [editedTodo, setEditedTodo] = useState("");
  const [editedTodoId, setEditedTodoId] = useState(null);

  useEffect(() => {
    const updatedTodoList = JSON.parse(localStorage.getItem("todoKey")) || [];
    setTodoList(updatedTodoList);
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoKey", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = () => {
    setDisplay(true);
  };

  const clearTodoList = (event) => {
    event.preventDefault();
    setTodoList([]);
    localStorage.clear();
  };

  const todoFilterPage = todoList.filter((eachElement) => {
    if (todoFilter === "Completed") {
      return eachElement.status === true;
    } else if (todoFilter === "Incomplete") {
      return eachElement.status === false;
    } else {
      return true;
    }
  });

  return (
    <div className="todoAppPageContainer">
      <div className="headerContainer">
        <h1 className="todoHeading">Today</h1>
        <div>
          <TodoButton
            onclick={addTodo}
            className={"addButton"}
            value={
              <img
                src="https://res.cloudinary.com/dw7ksdscg/image/upload/v1697090631/More_uvu5pb.png"
                className="addTodo"
                alt="add"
              />
            }
          />
        </div>
      </div>
      {display && (
        <TodoInput
          setDisplay={setDisplay}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
      {todoList.length > 0 && display === false && (
        <>
          <TodoFilters
            todoList={todoList}
            todoFilter={todoFilter}
            setTodoFilter={setTodoFilter}
          />
          <TodoListItems
            todoFilterPage={todoFilterPage}
            todoList={todoList}
            setTodoList={setTodoList}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
            setEditedTodoId={setEditedTodoId}
            editedTodoId={editedTodoId}
          />
          <div className="todoClearButtonContainer">
            <TodoButton
              value={"Clear All"}
              onclick={clearTodoList}
              className={"clearButton"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default TodoAppPage;
