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
  time,
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
          ? { ...eachElement, title: editedTodo, time: time }
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
          <li key={eachElement.id} className="todoListItemsContainer">
            <input
              id={eachElement.id}
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
                    onBlur={onSaveEdit}
                    autoFocus
                  />
                </form>
              ) : (
                <label htmlFor={eachElement.id} className="contentStyling">
                  {eachElement.title}
                </label>
              )}
              <>
                <TodoButton
                  className="todoEditButtons"
                  onclick={() => updatedText(eachElement.id)}
                  value={
                    <i className="fa-regular fa-pen-to-square todoIconStyle"></i>
                  }
                />
                <TodoButton
                  className="todoEditButtons"
                  onclick={() => deleteTodoTask(eachElement)}
                  value={<i className="fa-solid fa-trash todoIconStyle"></i>}
                />

                {eachElement.status ? (
                  <label className="circle completeStatus"></label>
                ) : (
                  <label className="circle inCompleteStatus"></label>
                )}
                <div>
                  <i className="fa-regular fa-clock todoIconTime"></i>
                  <i className="todoIconTime timeStyle">{eachElement.time}</i>
                </div>
              </>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
