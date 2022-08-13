import React from 'react'

export function Todoitem({ todo }) {
    const {id, task, completed} = todo
    return <li>{task}</li>
  
}
