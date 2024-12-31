import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo=(todo)=>{
    // isme apan purane mtlb jo previous values ya todos hai vo bhi rkhnge aur new vale bhi i.e. concat krte jaynge
    // ... [spread] hai refer javascript
    // prev purani values aur todos jo new hai
    // setTodos((prev)=>[todo,...prev])
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }
  // for this to understand refer 'Context api with local storage' vno. 14 after 30min.
  const updateTodo=(id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id=== id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  //ab baat ati hai local storage ki
  // local storage mtlb ki jo bhi phle se todos saved hai vo le kr ana 
  // local storage always in string format toh apn ko json me convert krna pdhega
  useEffect(()=>{
    // const todos=localStorage.getItem("todos")
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  
  // ab jo naye todo apn add krnge vo local storage mein kese dalenge
  // toh apn ek aur useEffect bna kr new todo ko ;ocal storage m dalnge
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id}
            className='w-full'>
            <TodoItem todo={todo} />
            </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
