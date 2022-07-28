import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import {addComp} from "./components/add";
import subComp from "./components/Sub";
import resulfComp from "./components/resulf";

function App() {
  return (
    <div className="App">
      <addComp/>
      <subComp/>
      <resulfComp/>
    </div>
  );
}

export default App;
