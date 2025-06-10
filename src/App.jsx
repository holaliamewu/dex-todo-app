import { Check, EllipsisVertical, Plus } from "lucide-react";
import { useEffect, useState } from "react";




const todosData = [
  { id: 1, title: "Make your first todo", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(todosData); 

  return (
    <div className="font-[Quicksand] text-center select-none ">
      <nav className="w-[90%] sm:max-w-[30%] flex justify-between mt-4 border border-zinc-100 w-[90%] mx-auto rounded-full pl-4  py-2">
        <h1 className="text-3xl font-bold">DexTodo</h1>
        <button 
        // onClick={ }
        className="flex items-center gap-1 bg-blue-600 text-white border-1 border-zinc-100  text-sm font-bold shadow-lg shadow-zinc-100 px-3 py-2  rounded-full mx-2 cursor-pointer"
          ><Plus size={16} strokeWidth={3} />New todo</button>
        </nav>

        <section className="mt-8 flex flex-col items-center">
          {todos.map(todo => {
                return (
                <div 
                  key={todo.id} 
                  onClick={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))}
                  className={ todo.completed ? "flex items-center justify-between w-[90%] sm:w-full sm:max-w-[30%] cursor-pointer border border-zinc-100 rounded-2xl p-4 mb-4" : "flex items-center justify-between w-[90%] sm:max-w-[30%] cursor-pointer border border-zinc-200 rounded-2xl p-4 mb-4" }>
                  <span className="flex gap-2 items-center  " >
                    <span
                    onClick={(e) => {
                      e.stopPropagation()
                      setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
                    }}
                    className="flex items-center justify-center w-5 h-5 rounded-lg border border-zinc-200">
                        {todo.completed ? <Check size={14} strokeWidth={3} className="text-zinc-300 "  /> : null}
                    </span>
                      <h2 className={ todo.completed ? "text-lg text-zinc-300 font-regular line-through italic" : "text-lg font-semibold"}>{todo.title}</h2>
                    </span>
                  <EllipsisVertical size={18} strokeWidth={1}  className="text-zinc-400 " />
                </div>
                );
            }
          )}
          </section>
    </div>
  );
}