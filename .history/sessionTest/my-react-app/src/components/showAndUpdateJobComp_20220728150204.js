import React from "react";
import removeIcon from "../assets/close.png";

const ShowAndUpdate = (props) => {
  const { nameOfJob } = props;
  return (
    <div id="showAndUpdateComp">
      <span id="detail">{nameOfJob}</span>
      <img
        id="delete"
        style={{ width: 20, height: 20 }}
        src={removeIcon}
        alt=""
      />
      <button id="update-Btn">update</button>
    </div>
  );
};

export default ShowAndUpdate;
