import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography>Doctari React Labs</Typography>
      </header>

      <main className="main">
        <State />
      </main>
    </div>
  );
}

export default App;
