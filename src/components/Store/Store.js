import { createStore } from "redux";
import CounterReducer from "../CounterReducer/CounterReducer";

const store = createStore(CounterReducer);
export default store;
