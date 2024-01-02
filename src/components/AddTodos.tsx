import { Button, Input, useTheme } from '@mui/material';

type AddTodosProps = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
};

export const AddTodos: React.FC<AddTodosProps> = ({
  newTodo,
  setNewTodo,
  handleAddTodo,
}) => {
  const pinkTheme = useTheme();

  return (
    <div className="todo-input">
      <Input
        type="text"
        placeholder="Add a new task"
        inputProps={{
          sx: {
            color: pinkTheme.palette.secondary.light,
            '::placeholder': {
              color: pinkTheme.palette.secondary.light,
            },
          },
        }}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={handleAddTodo}
        sx={{
          color: pinkTheme.palette.secondary.light,
        }}
      >
        Add
      </Button>
    </div>
  );
};
