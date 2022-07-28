import React from "react";
import removeIcon from "../assets/close.png";

const ShowAndUpdate = (props) => {
  const { jobName, deleteJob, jobID, jobIsUpdating } = props;
  const handleClick = () => {
    deleteJob(jobID)
  };
  return (
    <div id="showAndUpdateComp">
      {jobIsUpdating? <input id="detailInput" placeholder={jobName}/>:<span id="detailSpan">{jobName}</span>}
      <img
        id="delete"
        style={{ width: 20, height: 20 }}
        src={removeIcon}
        alt=""
        onClick={handleClick}
      />
      <button id="update-Btn">update</button>
    </div>
  );
};

export default ShowAndUpdate;
