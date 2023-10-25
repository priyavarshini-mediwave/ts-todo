import { useEffect, useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css"

function App() {
  // const [name, setName] = useState("ram");
  const initialtodos = getFromLocal()
  let [todos, setTodos] = useState<ITodo[]>(initialtodos);
  useEffect(() => {
    saveToLocal(todos)
  }, [todos])

  function saveToLocal(todos: ITodo[]) {
    localStorage.setItem("todos-ts", JSON.stringify(todos))
  }
  function getFromLocal() {
    const getTodos = localStorage.getItem("todos-ts")
    if (getTodos) {
      return JSON.parse(getTodos)
    }
    return []
  }

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit: false,
      isDone: false,
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
  function onCheck(id: Number, type: string) {
    console.log(id);
    const Checktodos = [...todos]
    const indextoCheck = todos.findIndex((t) => t.id == id);

    if (indextoCheck !== -1) {
      if (type === "done") Checktodos[indextoCheck]["isDone"] = true;
      else Checktodos[indextoCheck]["isDone"] = false;
    }
    // const Checktodos = [...todos]
    // Checktodos[indextoCheck] = {
    //   ...Checktodos[indextoCheck],
    //   isDone: true,
    // }
    setTodos(Checktodos);
  }

  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} extraCss="text-bold" onDelete={onDelete} onEdit={onEdit} handleSave={onSave} onCheck={onCheck} />
    </div>
  );
}

export default App;
