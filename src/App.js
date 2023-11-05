import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState } from "./todoAtoms";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <todoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
