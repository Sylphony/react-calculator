// In reducers/index.js, all reducers are imported and combined.
// To that, the combineReducers() from the redux lib is used.

import { combineReducers } from "redux";

import calculator from "./calculator";


const allReducers = combineReducers({
    /* The reducers here */
    calculator
});

export default allReducers;
