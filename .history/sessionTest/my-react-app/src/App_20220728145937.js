import "./App.css";
import React, { useState } from "react";
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

  const { jobList, setJobList } = useState(["job 1", "job 2", "job 3"]);

  const handleAddJob = (el) => {
    setJobList(el);
  };

  console.log(jobList);

  return (
    <div className="App">
      {/* {user.map(el=>{
      return <ChildComp username={el.name} id={el.id} func={logEverything}/>
    })} */}
      <AddJob funcChange={handleAddJob} />
      {jobList.map((job) => {
        <ShowAndUpdate nameOfJob={job} />;
      })}
    </div>
  );
}

export default App;
