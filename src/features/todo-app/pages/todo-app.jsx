import { Plus, Trash2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { initialTodos } from "../data/initial-todos";
import { TodoInput } from "../components/todo-input";
import { useTodo } from "../hooks/use-todo";
import { TodoList } from "../components/todo-list";

export function TodoAppPage() {
  const { todos, addTodo, toggleTodo, deleteTodo} = useTodo();

  return (
    <div className="h-full max-w-2xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Tasks
        </h1>
        <p className="text-slate-400 mt-2">
          Organise your day with a single click
        </p>
      </header>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} onDelete={deleteTodo}/>
    </div>
  );
}
