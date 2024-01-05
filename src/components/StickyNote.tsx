import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import '../components/StickyNote.css';

type StickyNoteProps = {
  todos: string[];
  handleRemoveTodo: (index: number) => void;
};

const StickyNote: React.FC<StickyNoteProps> = ({ todos, handleRemoveTodo }) => {
  return (
    <List className="stickyList">
      {todos.map((todo, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${index + 1}. ${todo}`} />
          <Button onClick={() => handleRemoveTodo(index)}>X</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default StickyNote;
