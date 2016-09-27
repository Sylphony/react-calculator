import { createStore, combineReducers, applyMiddleware } from "redux";
import calculatorReducers from "./calculator/reducers/index";
import commandsListReducers from "./commands-list/reducers/index";
import thunk from "redux-thunk";

// Combine all the reducers here
const allReducers = Object.assign({}, calculatorReducers, commandsListReducers);

// Create the store
const store = createStore(
    combineReducers(allReducers), 
    applyMiddleware(thunk)
);

export default store;
