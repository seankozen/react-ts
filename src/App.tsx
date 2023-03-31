import { useState } from 'react';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
  };

  const removeToDoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };


  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} onRemoveTodo={removeToDoHandler}/>
    </div>
  );
}

export default App;
