import React, { useState } from 'react';
import { OneTodoList } from './OneTodoList';

export const ManyTodoLists = () => {
  const [todoLists, setTodoLists] = useState<string[][]>([]);

  const addTodoList = () => {
    setTodoLists([...todoLists, []]); // add a new empty list
  };

  const updateTodoList = (index: number, newList: string[]) => {
    setTodoLists(todoLists.map((list, i) => (i === index ? newList : list)));
  };

  const removeTodoList = (index: number) => {
    const newTodoLists = todoLists.filter((_, i) => i !== index);
    setTodoLists(newTodoLists);
  };

  return (
    <div>
      {todoLists.map((list, index) => (
        <OneTodoList
          key={index}
          initialTodos={list}
          onTodosChange={(newList) => updateTodoList(index, newList)}
          onRemove={() => removeTodoList(index)}
        />
      ))}
      <button onClick={addTodoList}>Add List</button>
    </div>
  );
};
