import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
// Importing our actions
import { increment } from "./actions";
import { decrement } from "./actions";
import { signIn } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="App">
        <h1>Counter: {counter} </h1>
        <button onClick={() => dispatch(increment())}>PLUS</button>
        <button onClick={() => dispatch(decrement())}>MINUS</button>
        <button onClick={() => dispatch(signIn())}>
          {isLogged ? "Sign Out" : "Sign In"}
        </button>
        {isLogged ? (
          <div className="loggedIn">
            <h3>Valuable Information I Shouldn't See {isLogged}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
