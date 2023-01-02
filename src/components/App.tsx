import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data'
import TodoList from './TodoList';

const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);  // где не примитивные значения передаем дженерики

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue('');
    }
  }

  const removeTodo = (id: number): void => {
    let filter = todos.filter(todo => todo.id !== id ? true : false)
    setTodos(filter);
  };
  const toogleTodo = (id: number): void => {

    let result = todos.map(todo => todo.id !== id ? todo : { ...todo, complete: !todo.complete });
    // if (todo.id !== id) {
    //   return todo;
    // } else {
    //   return { ...todo, complete: true }
    // }


    setTodos(result);
  };

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // чтобы TS понимал что такае e-событие
    setValue(e.target.value);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  // useRef<T>(initialValue: T|null) если нажать на useRef есть описание

  const onKeyDownHandler: React.KeyboardEventHandler = (e) => {
    // наводим на onKeyDown в inpute получаем подсказку что писать после React
    if (e.key === 'Enter') {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue('');
    }
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [])


  return (
    <div>
      <div>
        <input value={value} onChange={handlerChange} ref={inputRef} onKeyDown={onKeyDownHandler} />
        <button onClick={addTodo}>Add</button>
        <TodoList items={todos} removeTodo={removeTodo} toogleTodo={toogleTodo} />
      </div>
    </div>
  )
}

export default App;