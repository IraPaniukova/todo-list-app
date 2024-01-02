import React, { useState } from 'react';
import './App.css';
import StickyNote from './components/StickyNote';
import { AddTodos } from './components/AddTodos';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  // const [todoLists, setTodoLists] = useState<string[][]>([]);

  // Load TODOs from local storage on app startup
  // useEffect(() => {
  //   const storedList = localStorage.getItem('todos');
  //   const storedTodos = storedList ? JSON.parse(storedList) : [];
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  // // Update local storage whenever TODOs change
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodoList = todos.filter((_, i) => i !== index);
    setTodos(newTodoList);
  };
  // const handleAddTodoList =()=>{

  // }

  return (
    <header className="App-header">
      <h1>TO DO LIST</h1>
      {
        <AddTodos
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
      }

      {<StickyNote todos={todos} handleRemoveTodo={handleRemoveTodo} />}

      {/* {todos && todos.length > 0 ? <StickyNote todos={todos} handleRemoveTodo={handleRemoveTodo} /> : null} */}
    </header>
  );
}

export default App;
