import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.text =
        state.todos.id === action.payload
          ? action.payload.text
          : state.todos.text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // To use the different reducers at different screen.

export default todoSlice.reducer; // To use in store.
