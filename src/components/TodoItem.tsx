import React from 'react'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {}; // {} для дальнейшего расширения
                                  
const TodoItem: React.FC<ITodoItem> = ({id, title, complete}) => {
  
  return (
    <div>
      <input type="checkbox" checked={complete}/>
      {title}
      <button>X</button>
    </div>
  )
}

export default TodoItem;