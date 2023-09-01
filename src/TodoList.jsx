import { TodoItem } from "./TodoItem";

export function TodoList({ mylist, settodos }) {
  function deleteitem(id) {
    settodos((currenttodos) => {
      return currenttodos.filter((todo) => todo.id !== id);
    });
  }

  function toggletodo(id, completed) {
    settodos((currenttodos) => {
      return currenttodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  return (
    <ul className="list">
      {mylist.length === 0 && "No Todos Please add some Todos"}
      {mylist.map((todo) => {
        return (
          <TodoItem {...todo} key={todo.id} toggletodo={toggletodo} deleteitem={deleteitem} />
        );
      })}
    </ul>
  );
}
