import React from "react";
import "./TodoListItems.css";
import TodoButton from "../TodoButton/TodoButton";

const TodoListItems = ({
  todoFilterPage,
  todoList,
  setTodoList,
  setEditedTodo,
  setEditedTodoId,
  editedTodo,
  editedTodoId,
}) => {
  const updatedText = (id) => {
    setEditedTodoId(id);
    const textUpdated = todoList.find((eachElement) => eachElement.id === id);
    if (textUpdated.title !== " ") {
      setEditedTodo(textUpdated.title.trim());
    }
  };

  const updateCheckbox = (eachTodo) => {
    setTodoList(
      todoList.map((eachElement) => {
        if (eachElement.id === eachTodo.id) {
          return { ...eachElement, status: !eachElement.status };
        }
        return eachElement;
      })
    );
  };

  const deleteTodoTask = (eachTodo) => {
    setTodoList(
      todoList.filter((eachElement) => eachElement.id !== eachTodo.id)
    );
  };

  const onSaveEdit = (event) => {
    event.preventDefault();
    if (editedTodo === "") {
      alert("Please provide valid todo");
    } else if (editedTodo.trim() !== "") {
      const updatedTodo = todoList.map((eachElement) =>
        eachElement.id === editedTodoId
          ? { ...eachElement, title: editedTodo }
          : eachElement
      );
      setTodoList(updatedTodo);
      setEditedTodoId(null);
    }
  };

  return (
    <ul>
      {todoFilterPage.map((eachElement) => {
        return (
          <li key={eachElement.id} className="todo-list-items-container">
            <input
              type="checkbox"
              className="checkboxStyling"
              onChange={() => updateCheckbox(eachElement)}
              checked={eachElement.status}
            />

            <div className="contentBox">
              {editedTodoId === eachElement.id ? (
                <form onSubmit={onSaveEdit}>
                  <input
                    className="editInputTodo"
                    type="text"
                    value={editedTodo}
                    onChange={(event) => setEditedTodo(event.target.value)}
                    autoFocus
                  />
                </form>
              ) : (
                <label className="contentStyling">{eachElement.title}</label>
              )}
              <>
                <TodoButton
                  className="todo-edit-buttons"
                  onclick={() => updatedText(eachElement.id)}
                  value={
                    <i className="fa-regular fa-pen-to-square todo-icon-style"></i>
                  }
                />
                <TodoButton
                  className="todo-edit-buttons"
                  onclick={() => deleteTodoTask(eachElement)}
                  value={<i className="fa-solid fa-trash todo-icon-style"></i>}
                />

                {eachElement.status ? (
                  <label className="circle completeStatus"></label>
                ) : (
                  <label className="circle inCompleteStatus"></label>
                )}
              </>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
