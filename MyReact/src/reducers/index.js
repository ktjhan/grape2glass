import { combineReducers } from "redux";

import WheelButtonsReducer from "./reducer_wheel_buttons";
import ActiveWheelButtonReducer from "./reducer_active_wheel_button";
import OptionsListReducer from "./reducer_options_list";
import SelectOptionsReducer from "./reducer_selected_options";

const rootReducer = combineReducers({
  wheelbuttons: WheelButtonsReducer,
  activeWheelButton: ActiveWheelButtonReducer,
  optionsList: OptionsListReducer,
  selectedOptions: SelectOptionsReducer
});

export default rootReducer;
