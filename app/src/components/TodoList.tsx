import { ITodo } from "../types";
//import { ITodoList } from "../types";
import TodoEdit from "./TodoEdit";

interface ITodoList {
    todos: ITodo[];
    extraCss?: string;

    onDelete: (id: Number) => void;
    onEdit: (id: Number) => void;
    handleSave: (str: string, id: Number) => void;

}

const TodoList: React.FC<ITodoList> = ({ todos, extraCss, onDelete, onEdit, handleSave }) => {
    function handleDelete(id: Number) {
        console.log(id);
        onDelete(id);
    }
    function handleEdit(id: Number) {
        console.log(id);
        onEdit(id);
    }
    function handleSaveinList(newText: string, id: Number) {
        handleSave(newText, id);
    }

    return (
        <div className={extraCss}>
            {todos.map((t) => (<div key={t.id.toString()}>{
                t.isEdit ? <div key={t.id.toString()}>
                    <TodoEdit handleSave={handleSaveinList} todo={t} />
                </div> : <>
                    <div key={t.id.toString()}>
                        <label>
                            <input type="checkbox" />
                            <span></span>
                            {t.text}
                        </label>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>

                        <button onClick={() => handleEdit(t.id)}>Edit</button>
                    </div>
                </>
            }
            </div>))}
        </div>
    );
};

export default TodoList;
