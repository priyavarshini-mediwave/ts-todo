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
      isEdit: false,
    };
    setTodos((prev) => [...prev, obj]);
  }
  function onDelete(id: Number) {
    const fiteredarray = todos.filter((t) => t.id !== id);
    setTodos(fiteredarray);
  }
  function onEdit(id: Number) {
    const indextoEdit = todos.findIndex((t) => t.id == id);
    //todos[indextoEdit].isEdit = true;
    // console.log(todos);
    const updatedtodos = [...todos]
    updatedtodos[indextoEdit] = {
      ...updatedtodos[indextoEdit],
      isEdit: true,
    }
    setTodos(updatedtodos);
    console.log(updatedtodos);
  }
  function onSave(newText: string, id: Number) {
    const indextoSave = todos.findIndex((t) => t.id == id);

    const updatedtodos = [...todos]
    updatedtodos[indextoSave] = {
      ...updatedtodos[indextoSave],
      text: newText,
      isEdit: false,
    }
    setTodos(updatedtodos);
  }

  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} extraCss="text-bold" onDelete={onDelete} onEdit={onEdit} handleSave={onSave} />
    </div>
  );
}

export default App;
