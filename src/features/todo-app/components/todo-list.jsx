import { CheckCircle2, Pencil, Trash, Trash2 } from "lucide-react";
import { TodoItem } from "./todo-item";

export function TodoList({ todos, toggleTodo, onDelete }) {
  return (
    <div className="space-y-3">
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} toggleTodo={toggleTodo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
