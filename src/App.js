import React from "react";
import logo from "./logo.svg";
import "./App.css";
export const sum = (x, y) => x + y;

function App() {
  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
