import { Z_DEFAULT_STRATEGY } from "zlib"; // eslint-disable-line

const initialState = {
    todoList: [],
  }

let nextTodoId = 1000;
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todoList: [...state.todoList, { id: nextTodoId ++, todo: action.payload.todo }]
        };
      case 'DEL_TODO':
        return {
          ...state,
          todoList: state.todoList.filter(todo => todo !== action.payload.todo)
        };
      default:
        return state;
    }
  };

