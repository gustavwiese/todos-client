import { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todosService from "./services/todoService";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todosService.getAll();
    setTodos(todos);
  };

  const deleteTodo = async (id: string) => {
    await todosService.delete(id);
    loadTodos();
  };

  return (
    <>
      <NewTodo />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}

export default App;
