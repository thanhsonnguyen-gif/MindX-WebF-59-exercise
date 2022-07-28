import React, { useState } from "react";

const AddJob = (props) => {
  const { funcChange } = props;
  const { inputChange, setInputChange } = useState("");

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleAdd = (inputChange) => {
    funcChange(inputChange);
  };

  return (
    <>
      <input
        type="text"
        placeholder="input your work..."
        onChange={handleChange}
        value={inputChange}
      />
      <button onClick={handleAdd}>Add job</button>
    </>
  );
};

export default AddJob;
