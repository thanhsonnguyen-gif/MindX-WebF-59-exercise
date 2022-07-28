import "./App.css";
import React from "react";
import ChildComp from "./components/childComp";

function App() {

  const user = [
    {name: "mot", id:1}, 
    {name: "hai", id:2},
    {name: "ba", id:3},
  ]

  return (
    <div className="App">
    {user.map(el=>{
      return <ChildComp username={el.name} id={el.id}/>
    })}
    </div>
  );
}

export default App;
