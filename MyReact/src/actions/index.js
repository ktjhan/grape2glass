export function selectWheelButton(button) {
  return {
    type: "WHEEL_BUTTON_SELECTED",
    payload: button
  };
}

export function addOption(option) {
  return {
    type: "ADD_OPTION",
    payload: option
  };
}

export function removeOption(option) {
  return {
    type: "REMOVE_OPTION",
    payload: option
  };
}
