// get count & todo
export const getCountandTodo = (state) => {
  return {
    count: state.count.count,
    todo: state.todo.todo,
  };
};

// just return all state
export const getAllState = state => state;

// loading state
export const getLoading = (state) => {
  return state.loading;
};
