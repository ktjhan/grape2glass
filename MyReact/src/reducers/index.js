import { combineReducers } from "redux";

import WheelButtonsReducer from "./reducer_wheelbuttons";

const rootReducer = combineReducers({
  wheelbuttons: WheelButtonsReducer
});

export default rootReducer;

