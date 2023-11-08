import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../todoAtoms";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

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
