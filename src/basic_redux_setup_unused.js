// This file is unused, saving for the sake of note taking. Aren't taking advantage of React everything is setup in the one file.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

// Store - Is the globalized state (Data?) - That you can access from anywhere..

// Action - The action describes what you want to do. The action will have a name.
const increment = () => {
  return {
    // "type:" is really just the name
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    // "type:" is really just the name
    type: "DECREMENT"
  };
};

// Reducer - The reducer will check what "Action" is called and based on that action it will modify the "Store".
// Initial state of our counter is 0, it will also take in an action.
const counter = (state = 0, action) => {
  // ("Counter" is currently our only global state)
  // Switch the action dependent on it's name (Increment or Decrement)
  switch (action.type) {
    case "INCREMENT":
      // What the case is doing
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// Add the counter to the Store
let store = createStore(counter);

// Display the counter in the console
store.subscribe(() => console.log(store.getState()));

// Dispatch - The dispatch executes the action to the reducer
store.dispatch(increment()); // dispatch the increment function that returns the increment object, based on the name it returns the state of 0 + 1
store.dispatch(decrement());
store.dispatch(decrement()); // dispatched the decrement twice, the state now returns -1

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
