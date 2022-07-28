import React from "react";
import removeIcon from '../assets/close.png'

const ShowAndUpdate = () => {
  return (
    <div id="showAndUpdateComp">
      <span id="detail">this is job 1</span>
      <img id="delete" style={{width:20, height:20}} src={removeIcon} alt="" />
      <button id="update-Btn">update</button>
    </div>
  );
};

export default ShowAndUpdate;
