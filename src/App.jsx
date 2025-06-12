import { useState, useEffect } from "react";  
import AddTodoModal from "./components/add-todo-modal";
import Navbar from "./components/navbar";
import TodoList from "./components/todo-list";


export default function App() {

  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [
    { id: 1, title: "Make your first todo", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos); 
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos to localStorage:', error);
    }
    console.log('Todos updated:', todos);
  }, [todos]);

  function handleCloseModal() {
    setShowAddTodoModal(false);
  }
   
  function handleAddTodo(title) {
    const newTodo = {
     id: todos.length + 1,
     title: title,
     completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleOpenModal() {
    setShowAddTodoModal(true);
  }

  function handleDelete(todoId) {
 setTodos(todos.filter(todo => todo.id !== todoId));
 };

return (
    <div 
      className="flex flex-col w-full min-h-[100svh] relative font-[Quicksand] text-center 
      select-none  ">
      <Navbar onOpen={handleOpenModal} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        onDelete={handleDelete}
        />
      { showAddTodoModal && 
      <AddTodoModal 
        isOpen={showAddTodoModal} 
        onAdd={handleAddTodo} 
        onClose={handleCloseModal} 
        />}
    </div>
  );
}