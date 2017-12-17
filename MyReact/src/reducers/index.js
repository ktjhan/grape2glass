import { combineReducers } from "redux";

import WheelButtonsReducer from "./reducer_wheel_buttons";
import ActiveWheelButtonReducer from "./reducer_active_wheel_button";
import OptionsListReducer from "./reducer_options_list.js";

const rootReducer = combineReducers({
  wheelbuttons: WheelButtonsReducer,
  activeWheelButton: ActiveWheelButtonReducer,
  optionsList: OptionsListReducer
});

export default rootReducer;
