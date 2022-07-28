import "./App.css";
import React, { useState } from "react";
import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";


function App() {
const [job, setJob] = useState(['job 1', 'job 2', 'job 3'])

const addNewJob =(newJob) => {
  setJob(...job, newJob)
}

console.log(job)

  return (
    <div className="App">
      <AddJob addJob={addNewJob}/>
      {job.map((job) => 
        <ShowAndUpdate jobName={job}/>
      )}
    </div>
  );
}

export default App;
