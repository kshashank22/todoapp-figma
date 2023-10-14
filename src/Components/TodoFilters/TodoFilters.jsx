import React from "react";
import "./TodoFilters.css";

const TodoFilters = ({ todoFilter, setTodoFilter }) => {
  return (
    <div className="todoFilter">
      <label>
        <input
          type="radio"
          value="All"
          name="todo"
          className="todoFilterInput"
          onChange={() => setTodoFilter("All")}
          checked={todoFilter === "All"}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="Completed"
          name="todo"
          className="todoFilterInput"
          onChange={() => setTodoFilter("Completed")}
          checked={todoFilter === "Completed"}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          value="Incomplete"
          name="todo"
          className="todoFilterInput"
          onChange={() => setTodoFilter("Incomplete")}
          checked={todoFilter === "Incomplete"}
        />
        InCompleted
      </label>
    </div>
  );
};

export default TodoFilters;
