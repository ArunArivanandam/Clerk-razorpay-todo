import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p>Nothing here yet- add your first todo above.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
