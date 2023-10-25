import { useState } from "react";
import { ITodo } from "../types";
interface ITodoEdit {
    todo: ITodo,
    handleSave: (str: string, id: Number) => void;
}

// const TodoEdit: React.FC<ITodoEdit> = ({ handleSave }) => {
//     const [newText, setnewText] = useState("");
//     function handleEditSubmit() {
//         handleSave(newText)
//     }
//     <form >
//         <input
//             type="text"
//             value={newText}
//             onChange={(e) => setnewText(e.target.value)}
//         />
//         <button type="submit" onClick={() => handleEditSubmit()}>Save Changes</button>
//     </form>;
// }
//export default TodoEdit;
const TodoEdit: React.FC<ITodoEdit> = ({ handleSave, todo }) => {
    const [newText, setnewText] = useState(todo.text);
    function onEditSubmit(e: React.FormEvent<HTMLFormElement>, newText: string, id: Number) {
        e.preventDefault();
        handleSave(newText, id)
    }
    return (
        <form onSubmit={(e) => onEditSubmit(e, newText, todo.id)}>
            <input
                type="text"
                value={newText}
                onChange={(e) => setnewText(e.target.value)}
                required
            />
            <button>Save Changes</button>
            {/* <button onClick={() => onEditSubmit(newText, todo.id)}>Save Changes</button> */}
        </form>)
}
export default TodoEdit;