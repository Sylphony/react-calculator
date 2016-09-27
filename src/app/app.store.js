import { createStore, combineReducers } from "redux";
import calculatorReducers from "./calculator/reducers/index";
import commandsListReducers from "./calculator/reducers/index";

// Combine all the reducers here
const allReducers = Object.assign({}, calculatorReducers, commandsListReducers);

// Create the store
const store = createStore(combineReducers(allReducers));

export default store;
