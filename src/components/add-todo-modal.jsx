import { useState } from "react";

export default function AddTodoModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");

  function handleAdd()  {
    if (title.trim()) {
      onAdd(title);
      setTitle("");
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="flex absolute items-center justify-center w-full h-[100vh] backdrop-blur-sm">
        <div className="bg-stone-50 p-6 rounded-xl shadow-xs border-2 border-stone-100 
        w-[90%] sm:w-[60%] md:w-[30%]">
          <h2 className="text-xl text-left  font-black mb-4">Add New Todo</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            className="w-full bg-white p-2 border-2 border-stone-200 rounded-xl mb-4 "
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 text-sm text-stone-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="px-3 py-2 bg-blue-600 text-sm text-white font-semibold rounded-xl"
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    )
  );
}