import { createStore } from "redux";
import calculatorReducers from "./calculator/reducers/index";

const store = createStore(calculatorReducers);

export default store;
