
export const addTodo = (todo) => {
  return { 
    type: 'ADD_TODO',
    payload: { todo }
  };
}

export const delTodo = (todo) => {
  return { 
    type: 'DEL_TODO',
    payload: { todo }
  };
}

export const delById = (id) => {
  return { 
    type: 'DEL_BY_ID',
    payload: { id }
  };
}