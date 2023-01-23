
import "./App.css"

import { useEffect, useRef } from 'react';
import { useState } from "react";

import { Todolist } from './todolist.jsx';





function App() {


  const todotaskref = useRef();
  function localstorageitems() {
    if (JSON.parse(localStorage.getItem("task")) !== null) { return JSON.parse(localStorage.getItem("task")) }
    else {
      return []
    }
  }
  

  const [todos, settodos] = useState(localstorageitems())

  const add = () => {


    const task = todotaskref.current.value;
    if (task === "") return;

    settodos((prevtodos) => {
      return [...prevtodos, { task }]


    })





    todotaskref.current.value = null;
  }
  const taskdelete = () => {
    settodos([])



  }
  if (todos !== "" && todos !== undefined) {
    localStorage.setItem("task", JSON.stringify(todos))
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='app_container'>
        <input className='input' ref={todotaskref} type="text" placeholder='nueva tarea'></input>
        <div className='buttondiv'>
          <button className='button' onClick={add}>Agregar</button>
          <button className='button' onClick={taskdelete}>Borrar</button>

        </div>
        <div className="ToDo_container">
         {(todos)? <Todolist todos={todos} />: <p>aca van los To Do</p>} 
        </div>
      </div>

    </div>
  );

}


export default App;
