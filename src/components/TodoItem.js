import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../todoAtoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div>
      <input type="text" value={item.text} />
    </div>
  );
};

export default TodoItem;
