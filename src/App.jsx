import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import './App.css'

import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState([])

  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
      <h1 className='font-bold text-center text-xl'>TaskFlow - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg px-5 py-1' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-4 py-2 mx-2 text-sm font-bold text-white rounded-xl'>Save</button>
          </div>
        </div>
        <div className="showFinished my-5">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='ml-2 my-4'>Show Finished</label>
          <div className="bg-black h-[1px] opacity-20 w-[90%] mx-auto my-2"></div>
        </div>
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No tasks added</div>}
          {todos
            .filter(item => showFinished || !item.isCompleted)
            .map(item => (
              <div key={item.id} className="todo flex  my-3 justify-between">
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'><FaEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'><MdDeleteOutline /></button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default App


