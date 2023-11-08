import React from "react";

const TodoListFilters = () => {
  return (
    <div>
      Filters:
      <select>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
