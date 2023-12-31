import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, settodos] = useState("");

  function addTodo(title) {
    settodos((curentList) => {
      return [
        ...curentList,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} ></NewTodoForm>
      <h1 className="header">To do List</h1>
      <TodoList mylist={todos} settodos={settodos}></TodoList>
    </>
  );
}
