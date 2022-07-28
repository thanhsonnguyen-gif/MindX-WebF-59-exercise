import "./App.css";
import React, { useState } from "react";
import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";


function App() {
const [job, setJob] = useState(['job 1', 'job 2', 'job 3'])

  const handleAddJob = (el) => {
    setJobList(el);
  };

  return (
    <div className="App">
      <AddJob funcChange={handleAddJob} />
      {job.map((job) => 
        <ShowAndUpdate jobName={job}/>
      )}
    </div>
  );
}

export default App;
