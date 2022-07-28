import "./App.css";
import React, { useState } from "react";
// import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";


function App() {
const {job, setJob} = useState(0)

  // const handleAddJob = (el) => {
  //   setJobList(el);
  // };

  console.log(job);

  return (
    <div className="App">
      {/* <AddJob funcChange={handleAddJob} /> */}
      {job.map((job) => 
        <ShowAndUpdate />
      )}
    </div>
  );
}

export default App;
