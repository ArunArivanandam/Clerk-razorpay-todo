import { useEffect, useState } from "react";
import api from "./api/axios.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await api.get("/todos");
      setTodos(data);
    } catch (err) {
      setError("Could not load todos. Is the backend running on port 3000?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (text) => {
    const { data } = await api.post("/todos", { text });
    setTodos((prev) => [data, ...prev]);
  };

  const handleToggle = async (todo) => {
    const { data } = await api.patch(`/todos/${todo._id}`, {
      completed: !todo.completed,
    });
    setTodos((prev) => prev.map((t) => (t._id === data._id ? data : t)));
  };

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };
  return (
    <div>
      <h1 className="bg-red-300 font-bold text-center p-2 mb-5">Todo App</h1>
      <div className="container mx-auto max-w-3xl px-4">
        <p>Stage 1- plain MERN CRUD, no auth pr payments yet</p>

        <TodoForm onAdd={handleAdd} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
