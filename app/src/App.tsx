import { useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // const [name, setName] = useState("ram");
  let [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
    };
    setTodos((prev) => [...prev, obj]);
  }
  function onDelete(id: Number) {
    const fiteredarray = todos.filter((t) => t.id !== id);
    setTodos(fiteredarray);
  }

  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} extraCss="text-bold" onDelete={onDelete} />
    </div>
  );
}

export default App;
