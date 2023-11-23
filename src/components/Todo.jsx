import React from "react";

const Todo = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  index,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <input
          onChange={() => updateHandler(index)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(index)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
