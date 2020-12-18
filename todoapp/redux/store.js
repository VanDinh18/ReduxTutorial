import { create } from "react-test-renderer";
import { createStore } from "redux";
import { counter_reducer, todos_reducer } from './reducers';


const counter = createStore(counter_reducer);
const todos = createStore(todos_reducer);

export { counter, todos }