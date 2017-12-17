import { combineReducers } from "redux";

import WheelButtonsReducer from "./reducer_wheel_buttons";
import ActiveWheelButtonReducer from "./reducer_active_wheel_button";

const rootReducer = combineReducers({
  wheelbuttons: WheelButtonsReducer,
  activeWheelButton: ActiveWheelButtonReducer
});

export default rootReducer;
