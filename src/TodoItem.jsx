export function TodoItem({ id, completed, title, toggletodo, deleteitem }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggletodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteitem(id)}>
        Delete
      </button>
    </li>
  );
}
