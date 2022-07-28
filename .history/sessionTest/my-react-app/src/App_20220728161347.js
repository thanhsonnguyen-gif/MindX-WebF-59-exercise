import "./App.css";
import React, { useState } from "react";
import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";

function App() {
  const [job, setJob] = useState([
    { id: 123, name: "job 1" },
    { id: 321, name: "job 2" },
    { id: 121, name: "job 3" },
  ]);

  const addNewJob = (newJob) => {
    setJob([...job, newJob]);
  };

  return (
    <div className="App">
      <AddJob addJob={addNewJob} />
      {job.map((job) => (
        <ShowAndUpdate jobName={job.name} />
      ))}
    </div>
  );
}

export default App;
