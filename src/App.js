import Home from './Home';
import { default as PokeAPI } from './Poke/App.js';
import { default as Todolist } from './Todolist/App.js';

import './App.css';
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"



function App() {

  function NotFound(){
    return(
      <h1>error 404</h1>
    )
  }
function Check(){
  if (localStorage.getItem("task") != "[]"){
    console.log("hay tareas pendientes")
   return (<NavLink activeClassName="active" className='Link' to="Todolist">Todolist!!</NavLink>)
  }else{
    console.log("dia libre")
    return(<NavLink activeClassName="active" className='Link' to="Todolist">Todolist</NavLink>)
  }
   
   
  }


  return (

    <div className="App">
      <nav>
      <NavLink activeClassName="active" className='Link' to="/Home">Home</NavLink>
      <Check/>
      <NavLink activeClassName="active" className='Link' to="/PokeApi">PokeApi</NavLink>
     
      </nav>
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/Todolist' element={<Todolist/>}/>
        <Route path='PokeApi' element={<PokeAPI/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
   
  );
}

export default App;
