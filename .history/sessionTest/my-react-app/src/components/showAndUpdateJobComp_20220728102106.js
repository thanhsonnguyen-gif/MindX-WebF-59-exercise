import React from "react";
import removeIcon from '../assets/close.png'

const ShowAndUpdate = () => {
  return (
    <div>
      <span>this is job 1</span>
      <img src={removeIcon} alt="" />
      <button>update</button>
    </div>
  );
};

export default ShowAndUpdate;
