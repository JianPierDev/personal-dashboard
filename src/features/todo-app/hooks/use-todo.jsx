import { useState } from "react";
import { initialTodos } from "../data/initial-todos";

export const useTodo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("")

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id)
    setTodos(updated)
  }

  const toggleTodo = (id) => {
    const updated = todos.map((todo) => (
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))

    setTodos(updated)
  }
  
  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo
  };
};
