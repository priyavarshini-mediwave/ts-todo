interface ITodo {
  id: Number;
  text: string;
  isEdit: boolean;
  isDone: boolean;
}
interface IAddTodo {
  onTodoAdd: (str: string) => void;
}
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  onDelete: (id: number) => void;
}
export type { IAddTodo, ITodo, ITodoList };
