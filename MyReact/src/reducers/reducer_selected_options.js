export default function(state = null, action) {
  switch (action.type) {
    case "ADD_OPTION":
      if (state == null) {
        return [action.payload.text];
      }
      if (!state.includes(action.payload.text)) {
        return [...state, action.payload.text];
      }
      break;
    case "REMOVE_OPTION":
      const index = state.indexOf(action.payload.text);
      const array = state.slice(0);
      array.splice(index, 1);
      return array;
      break;
  }
  return state;
}
