import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HelloWorlds } from "./Components/HelloWorlds";
import { chains } from "./matterjs";
import { Handshake } from "./Components/Handshake";
// const x = chains();
function App() {
  return (
    <>
      <script src="matter.js" />
      <div className="App">
        <header className="App-header">
          <div>hello</div>
          <Handshake />
          {/* <HelloWorlds /> */}
        </header>
      </div>
    </>
  );
}

export default App;
