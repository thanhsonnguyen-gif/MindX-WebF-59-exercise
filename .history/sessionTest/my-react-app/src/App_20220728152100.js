import "./App.css";
import React, { useState } from "react";
// import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";


function App() {

  const { jobList, setJobList } = useState(0);

  // const handleAddJob = (el) => {
  //   setJobList(el);
  // };

  console.log(jobList);

  return (
    <div className="App">
      {/* <AddJob funcChange={handleAddJob} /> */}
      {jobList.map((job) => 
        <ShowAndUpdate />
      )}
    </div>
  );
}

export default App;
