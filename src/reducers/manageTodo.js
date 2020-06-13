export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch (action) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload.text) }
    default:
      return state
  };

  return state;
}
