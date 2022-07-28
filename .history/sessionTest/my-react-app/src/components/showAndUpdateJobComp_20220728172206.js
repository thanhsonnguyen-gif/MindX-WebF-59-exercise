import React, {useState} from "react";
import removeIcon from "../assets/close.png";

const ShowAndUpdate = (props) => {

  const { jobName, deleteJob, jobID, jobIsUpdating, setIsUpdating, updateNameJob } = props;

  const handleClick = () => {
    deleteJob(jobID)
  };

  const [jobNameUpdate, setJobNameUpdate] = useState('')

  const handleUpdateCurrentEl = (e) => {
    setJobNameUpdate(e.target.value)
  }

  const handleClickChange = () => {
    setIsUpdating(jobID, jobIsUpdating)
    jobIsUpdating&&updateNameJob(jobNameUpdate)
  }
  
  return (
    <div id="showAndUpdateComp">
      {jobIsUpdating? <input id="detailInput" placeholder={jobName} value={jobNameUpdate} onChange={handleUpdateCurrentEl}/>:<span id="detailSpan">{jobName}</span>}
      <img
        id="delete"
        style={{ width: 20, height: 20 }}
        src={removeIcon}
        alt=""
        onClick={handleClick}
      />
      <button onClick={handleClickChange} id="update-Btn">update</button>
    </div>
  );
};

export default ShowAndUpdate;
