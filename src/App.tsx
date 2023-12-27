import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Input, Stack, useTheme } from "@mui/material";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedList = localStorage.getItem("todos");
    const storedTodos = storedList ? JSON.parse(storedList) : [];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodoList = todos.filter((_, i) => i !== index);
    setTodos(newTodoList);
  };
  const pinkTheme = useTheme();

  return (
    <header className="App-header">
      <h1>TO DO LIST</h1>
      <div className="todo-input">
        <Input
          type="text"
          placeholder="Add a new task"
          inputProps={{
            sx: {
              color: pinkTheme.palette.secondary.light,
              "::placeholder": {
                color: pinkTheme.palette.secondary.light,
              },
            },
          }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="outlined" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        // justifyContent="space-between"
        // width={300}
      >
        {todos.map((todo, index) => (
          <Stack key={index} direction="row" spacing={1}>
            <div>{todo}</div>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </Stack>
        ))}
      </Stack>
    </header>
  );
}

export default App;
