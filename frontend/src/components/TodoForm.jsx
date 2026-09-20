import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  const handleChange = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-amber-500 m-2 p-2 focus:placeholder-transparent"
      />
      <button type="submit" className="bg-amber-500 px-6 py-2.5 rounded-sm">
        Add
      </button>
    </form>
  );
}
