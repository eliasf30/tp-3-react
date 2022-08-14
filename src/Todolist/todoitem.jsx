import React from 'react'


export function Todoitem({ todo }) {
    const { task } = todo
    return <li className='todos'> - {task}</li>
  
}
