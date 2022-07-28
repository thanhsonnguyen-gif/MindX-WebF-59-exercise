import "./App.css";
import React from "react";
import {addComp} from "./components/add";
import subComp from "./components/Sub";
import resulfComp from "./components/resulf";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <addComp/>
      <subComp/>
      <resulfComp/>
      </React.StrictMode>
    </div>
  );
}

export default App;
