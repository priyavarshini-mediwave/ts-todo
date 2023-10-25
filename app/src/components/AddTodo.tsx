import { useState } from "react";
import { IAddTodo } from "../types";
// interface IAddTodo {
//   onTodoAdd: (str: string) => void;
// }

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onTodoAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addtodo"><strong>Todos : </strong></label>
      <input
        type="text"
        value={text}
        name="addtodo"
        placeholder="Enter works and press enter"
        onChange={(e) => setText(e.target.value)}
        required
      />
    </form>
  );
};

export default AddTodo;
