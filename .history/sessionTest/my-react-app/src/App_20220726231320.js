import "./App.css";
import React from "react";
import addComp from "./components/add";
import subComp from "./components/Sub";
import resultComp from "./components/result";

function App() {
  return (
    <div className="App">
      <addComp/>
      <subComp/>
      <resultComp/>
    </div>
  );
}

export default App;
