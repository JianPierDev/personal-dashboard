import { Pencil, Trash2 } from "lucide-react";

export function TodoItem({todo, onDelete, toggleTodo}) {
    const isCompleted = todo.completed ? true : false

  return (
    <li className="flex justify-between" key={todo.id}>
      <div className="flex items-center gap-4
      ">
        <input type="checkbox" checked={isCompleted} onChange={() => toggleTodo(todo.id)}/>
        <p className={isCompleted ? "line-through" : ""}>{todo.text}</p>
      </div>
      <div className="flex gap-4">
        <button>
          <Pencil size={18} />
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
