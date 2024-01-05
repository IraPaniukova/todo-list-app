import React, { useState } from 'react';
import StickyNote from '../components/StickyNote';
import { AddTodos } from '../components/AddTodos';
import Draggable from 'react-draggable';
import { Box } from '@mui/material';

type OneTodoListProps = {
  initialTodos: string[];
  onTodosChange: (newTodos: string[]) => void;
  onRemove: () => void;
};

export const OneTodoList: React.FC<OneTodoListProps> = ({
  initialTodos,
  onTodosChange,
  onRemove,
}) => {
  const [todos, setTodos] = useState<string[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      onTodosChange(newTodos);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    onTodosChange(newTodos);
  };

  return (
    <>
      <Draggable>
        <Box p={1} borderTop={2} borderColor="#ffff88">
          <button onClick={onRemove}>Remove this list</button>
          {
            <AddTodos
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              handleAddTodo={handleAddTodo}
            />
          }
          {<StickyNote todos={todos} handleRemoveTodo={handleRemoveTodo} />}

          {/* {todos && todos.length > 0 ? <StickyNote todos={todos} handleRemoveTodo={handleRemoveTodo} /> : null} */}
        </Box>
      </Draggable>
    </>
  );
};

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

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };
