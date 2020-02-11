import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// Combining all our reducers in one place, now we have 1 big state of all the data.
const allReducers = combineReducers({
  // Setting a name and attaching it to our reducer.. this can be visualized in the redux dev tools.
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;
