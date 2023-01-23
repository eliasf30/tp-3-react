
import React from "react"
import { Todoitem } from "./todoitem"


export function Todolist({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem todo = {todo}/>
      ))}
    </ul>
  );
}
