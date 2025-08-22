import { createSlice, nanoid } from '@reduxjs/toolkit';


const intialState = {
  todos: [{id : 1, text : "Hello world"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  intialState,
  reeducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      },
      state.todos.push(todo);
    },
    removeTodo: ()
  }
})
