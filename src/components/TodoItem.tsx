import React from 'react'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toogleTodo: (id: number) => void;

}; // {} для дальнейшего расширения

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, removeTodo, toogleTodo }) => {
   console.log(complete);
   
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={() => toogleTodo(id)}/>
      <span style={{margin: 5}}>{title}</span>
      <button style={{border: 'none', color: 'red'}} onClick={() => removeTodo(id)}>X</button>
    </div>
  )
}

export default TodoItem;