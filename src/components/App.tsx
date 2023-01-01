import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data'
import TodoList from './TodoList';

const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

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
    console.log(inputRef);

  }, [])


  return (
    <div>
      <div>
        <input value={value} onChange={handlerChange} ref={inputRef} onKeyDown={onKeyDownHandler} />
        <button onClick={addTodo}>Add</button>
        <TodoList items={todos} />
      </div>
    </div>
  )
}

export default App;