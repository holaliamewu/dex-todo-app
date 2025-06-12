import { Check, EllipsisVertical, Trash } from "lucide-react";
import { useState, useEffect } from "react";


export default function TodoList({todos = [], setTodos, onDelete}) {
 const [activeActionId, setActiveActionId] = useState(null);

 const toggleTodoComplete = (todoId) => {
 setTodos(todos.map(t => 
  t.id === todoId ? { ...t, completed: !t.completed } : t
 ));
 };

 const handleShowActions = (e, todoId) => {
 e.stopPropagation();
 setActiveActionId(activeActionId === todoId ? null : todoId);
 };

function handleDelete() {
 onDelete(activeActionId);
 setActiveActionId(null); 
};

 useEffect(() => {
  function handleClickOutside() {
   setActiveActionId(null);
  };

  document.addEventListener('click', handleClickOutside);
  return () => {
   document.removeEventListener('click', handleClickOutside);
  };
 }, []);

 return(
 <section 
  className="w-[90%] sm:w-[60%] md:w-[30%] mx-auto mt-8 flex flex-col items-center"
  role="list"
  aria-label="Todo items"
 >
  {todos.map(todo => (
  <div 
   key={todo.id} 
   onClick={() => toggleTodoComplete(todo.id)}
   className={`
   flex items-center justify-between w-full cursor-pointer 
   border ${todo.completed ? 'border-zinc-100' : 'border-zinc-200'} 
   rounded-2xl p-4 mb-4 relative
   `}
  >
   <span className="flex gap-2 items-center">
   <button
    onClick={(e) => {
    e.stopPropagation();
    toggleTodoComplete(todo.id);
    }}
    className="flex items-center justify-center w-5 h-5 rounded-lg border border-zinc-200"
    aria-label={`Mark ${todo.completed ? 'incomplete' : 'complete'}`}
   >
    {todo.completed && <Check size={14} strokeWidth={3} className="text-zinc-300" />}
   </button>
   <h2 className={todo.completed ? 
    "text-lg text-zinc-300 font-regular line-through italic" : 
    "text-lg font-semibold"
   }>
    {todo.title}
   </h2>
   </span>
   <button 
   onClick={(e) => handleShowActions(e, todo.id)} 
   className="p-1 hover:bg-zinc-100 rounded-full"
   aria-label="Show actions"
   >
   <EllipsisVertical size={18} strokeWidth={1} className="text-zinc-400" />
   {activeActionId === todo.id && (
    <div 
    onClick={(e) => e.stopPropagation()}
    className="absolute right-0 top-full mt-2 w-28 z-10"
    >
    <span onClick={handleDelete} className="flex items-center justify-center gap-2 w-full p-2 bg-red-500 text-white text-sm font-bold hover:bg-red-700 rounded-xl  rounded cursor-pointer">
    <Trash size={18} strokeWidth={2} /> Delete
    </span>
    </div>
   )}
   </button>
  </div>
  ))}
 </section>
 );
}