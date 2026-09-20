export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <span className="bg-amber-300 m-2 ">{todo.text}</span>
      </label>
      <button
        onClick={() => onDelete(todo._id)}
        aria-label="Delete todo"
        className="bg-red-400 px-2"
      >
        X
      </button>
    </li>
  );
}
