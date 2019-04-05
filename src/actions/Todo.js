export const addTodo = (todo) => {
  return { 
    type: 'ADD_TODO',
    payload: { todo: todo }
  };
}

export const delTodo = (todo) => {
    return { 
      type: 'DEL_TODO',
      payload: { deltodo: deltodo }
    };
  }