import React from "react";
import Draggable from "react-draggable";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

type StickyNoteProps = {
  todos: string[];
  handleRemoveTodo: (index: number) => void;
};

const StickyNote: React.FC<StickyNoteProps> = ({ todos, handleRemoveTodo }) => {
  return (
    <Draggable>
      <List
        sx={{
          width: "260px",
          height: "200px",
          background: "#FFFF88",
          color: "#3f306a",
          fontSize: "14px",
          fontStyle: "italic",
        }}
      >
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
            <Button onClick={() => handleRemoveTodo(index)}>X</Button>
          </ListItem>
        ))}
      </List>
    </Draggable>
  );
};

export default StickyNote;
