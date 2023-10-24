import { ITodo } from "../types";
//import { ITodoList } from "../types";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;

  onDelete: (id: Number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, extraCss, onDelete }) => {
  function handleDelete(id: Number) {
    console.log(id);
    onDelete(id);
  }

  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          <label>
            <input type="checkbox" />
            <span></span>
            {t.text}
          </label>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
