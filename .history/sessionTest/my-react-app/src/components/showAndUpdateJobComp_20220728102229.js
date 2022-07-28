import React from "react";
import removeIcon from '../assets/close.png'

const ShowAndUpdate = () => {
  return (
    <div>
      <span>this is job 1</span>
      <img style={{width:20, height:20}} src={removeIcon} alt="" />
      <button>update</button>
    </div>
  );
};

export default ShowAndUpdate;
