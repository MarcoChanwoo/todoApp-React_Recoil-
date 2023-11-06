import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../todoAtoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemIndex(todoList, index);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
    </div>
  );
};

export default TodoItem;
