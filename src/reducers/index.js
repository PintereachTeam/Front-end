export const articleReducer = (state, action) => {
  switch (action.type) {
    // case 'MODIFY':
    //     return action.newArr;
    case "TOGGLE_COMPLETED":
      return state.map(item =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "CLEAR_COMPLETED":
      return state.filter(item => item.completed === false);
    case "HANDLE_SUBMIT":
      return [action.newValue, ...state];
    default:
      return state;
  }
};
