import "./App.css";
import React, { useState } from "react";
import AddJob from "./components/addJob";
import ShowAndUpdate from "./components/showAndUpdateJobComp";

function App() {
  const [job, setJob] = useState([
    { id: 123, name: "job 1", isUpdating: false },
    { id: 321, name: "job 2", isUpdating: false },
    { id: 121, name: "job 3", isUpdating: false },
  ]);

  const addNewJob = (newJob) => {
    newJob.isUpdating = false;
    newJob.id = Math.floor(Math.random() * 1000); //them key id cho obj payload truyen len tu add Component
    setJob([...job, newJob]);
  };

  const deleteJob = (id) => {
    const newJobList = job.filter((el) => {
      return el.id !== id;
    });
    setJob(newJobList);
  };

  const setIsUpdating = (id) => {
    // job.forEach((el) => {
    //   if (el.id === id) {
    //     setJob((prev) => {
    //       return [...prev, { isUpdating: !state }];
    //     });
    //   }
    // });

    const newJobList = [...job].map((el) => {
      if (el.id === id) {
        el.isUpdating = !el.isUpdating;
      }
      return el;
    });
    setJob(newJobList);
  };

  const updateNameJob = (id, jobNameUpdate) => {

    const newJobList = [...job].map((el) => {
      if (el.id === id) {
        el.name = jobNameUpdate;
      }
      return el;
    });
    setJob(newJobList);
  };

  return (
    <div className="App">
      <AddJob addJob={addNewJob} />
      {job.map((job) => (
        <ShowAndUpdate
          jobName={job.name}
          jobID={job.id}
          deleteJob={deleteJob}
          jobIsUpdating={job.isUpdating}
          setIsUpdating={setIsUpdating}
          updateNameJob={updateNameJob}
        />
      ))}
    </div>
  );
}

export default App;
