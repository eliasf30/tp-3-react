import React from 'react'
import "./App.css"

export function Todoitem({ todo }) {
    const { task } = todo
    return <li className='todos'> {task}</li>
  
}
