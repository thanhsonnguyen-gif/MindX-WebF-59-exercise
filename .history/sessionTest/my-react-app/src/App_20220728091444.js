import "./App.css";
import React from "react";
import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";
// import ChildComp from "./components/childComp";

function App() {

  // const user = [
  //   {name: "mot", id:1}, 
  //   {name: "hai", id:2},
  //   {name: "ba", id:3},
  // ]

  // const logEverything = (func) =>{
  //   func();
  // }

  return (
    <div className="App">
    {/* {user.map(el=>{
      return <ChildComp username={el.name} id={el.id} func={logEverything}/>
    })} */}
    <AddJob/>
    <ShowAndUpdate/>
    </div>
  );
}

export default App;
