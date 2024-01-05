import React from 'react';
import './App.css';

import { ManyTodoLists } from './components/ManyTodoLists';

function App() {
  return (
    <header className="App-header">
      <h1>TO DO LIST</h1>
      {<ManyTodoLists />}
    </header>
  );
}

export default App;
