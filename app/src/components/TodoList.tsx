import { ITodo } from "../types";
//import { ITodoList } from "../types";
import TodoEdit from "./TodoEdit";


interface ITodoList {
    todos: ITodo[];
    extraCss?: string;

    onDelete: (id: Number) => void;
    onEdit: (id: Number) => void;
    handleSave: (str: string, id: Number) => void;
    onCheck: (id: Number, str: string) => void;

}

const TodoList: React.FC<ITodoList> = ({ todos, extraCss, onDelete, onEdit, handleSave, onCheck }) => {
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
    // function handleCheck(id: Number) {
    //     console.log(id);
    //     const indextoCheck = todos.findIndex((t) => t.id == id);
    //     const Checktodos = [...todos]
    //     Checktodos[indextoCheck] = {
    //         ...Checktodos[indextoCheck],
    //         isDone: true,
    //     }




    // }
    function handleCheck(e: React.ChangeEvent<HTMLInputElement>, id: Number) {

        if (e.target.checked) {
            onCheck(id, "done");
        } else {
            onCheck(id, "undone");
        }
    }
    return (
        <div className="output"  >
            <h3>Your Works</h3>
            {todos.map((t) => (<div key={t.id.toString()} >{
                t.isEdit ? <div key={t.id.toString()} className="output-edited">
                    <TodoEdit handleSave={handleSaveinList} todo={t} />
                </div> : <>
                    <div key={t.id.toString()} className="output-unedited">
                        <label>
                            <input type="checkbox" onChange={(e) => handleCheck(e, t.id)} />
                            {t.isDone ? <span className="line">{t.text}</span> : <span>{t.text}</span>}
                            {/* // <span>{t.text}</span> */}

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
