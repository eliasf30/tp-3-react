


import { useEffect, useRef } from 'react';
import { useState } from "react";

import { Todolist }  from './todolist.jsx';





function App() {


  const todotaskref = useRef();
  function localstorageitems(){
    if (JSON.parse(localStorage.getItem("task")) !==null){return JSON.parse(localStorage.getItem("task"))}
  else{
    return []
  }
   }
  console.log(localstorageitems)
  
  const [todos,settodos] = useState(localstorageitems())
  
  const add = () => {
    
    
    const task = todotaskref.current.value;
    if (task === "") return;
    
    settodos((prevtodos) => {
      return [...prevtodos,{ task }]

    
    })
   

    


    todotaskref.current.value = null;
  }
  const taskdelete = () => {
    settodos([])
    


  }
  if (todos !=="" && todos!==undefined){
    localStorage.setItem("task",JSON.stringify(todos))}
  return (
    <div className="App">
      
      <input className='input' ref={todotaskref} type="text" placeholder='nueva tarea'></input>
      <div className='buttondiv'>
      <button className='button' onClick={add}>add</button>
      <button className='button' onClick={taskdelete}>delete</button>
      </div>
     
      <Todolist todos={todos}/>

      
     
      
      
    </div>
  );

}


export default App;
