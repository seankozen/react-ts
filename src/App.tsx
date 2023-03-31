
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addToDoHandler = (todoText: string) => {

  };


  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
