export default function(state = null, action) {
  switch (action.type) {
    case "WHEEL_BUTTON_SELECTED":
      if (state != null && state.name == action.payload.name) {
        return null;
      }
      return action.payload;
      break;
  }
  return state;
}
