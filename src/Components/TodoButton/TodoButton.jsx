import React from "react";

function TodoButton({ type, value, onclick, className }) {
  return (
    <button type={type} onClick={onclick} className={className}>
      {value}
    </button>
  );
}

export default TodoButton;
