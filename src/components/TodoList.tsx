import React from 'react'
import { ITodo } from '../types/data'
import TodoItem from './TodoItem';

interface ITodoListProps {
  items: ITodo[];
}

// const TodoList = (props: ITodoListProps) => ... или так описываем тип пропсов
const TodoList: React.FC<ITodoListProps> = (props) => {
  
  return (
    <div>
        {props.items.map(todo => <TodoItem key={todo.id} {...todo}/>)}
    </div>
  )
}



export default TodoList;