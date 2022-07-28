import React from "react";
import removeIcon from "../assets/close.png";

const ShowAndUpdate = (props) => {
  const { jobName, deleteJob, jobID } = props;
  const handleClick = () => {
    deleteJob(jobID)
  };
  return (
    <div id="showAndUpdateComp">
      <span id="detail">{jobName}</span>
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
