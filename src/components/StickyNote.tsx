import React from 'react';
import Draggable from 'react-draggable';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

type StickyNoteProps = {
  todos: string[];
  handleRemoveTodo: (index: number) => void;
};

const StickyNote: React.FC<StickyNoteProps> = ({ todos, handleRemoveTodo }) => {
  return (
    <Draggable>
      <List
        sx={{
          boxShadow: '2px 5px 5px 3px rgba(0, 0, 0, .2)',
          width: '260px',
          height: '200px',
          background: '#FFFF88',
          color: '#3f306a',
          fontSize: '14px',
          fontStyle: 'italic',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.5em',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#cddc39',
            outline: '1px solid slategrey',
          },
        }}
      >
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${index + 1}. ${todo}`} />
            <Button onClick={() => handleRemoveTodo(index)}>X</Button>
          </ListItem>
        ))}
      </List>
    </Draggable>
  );
};

export default StickyNote;
