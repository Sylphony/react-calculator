// In reducers/index.js, all reducers are imported and combined.
// To that, the combineReducers() from the redux lib is used.

import { combineReducers } from "redux";

import calculatorInput from "./calculatorInput";
import calculatorResult from "./calculatorResult";


const allReducers = combineReducers({
    /* The reducers here */
    calculatorInput,
    calculatorResult
});

export default allReducers;
