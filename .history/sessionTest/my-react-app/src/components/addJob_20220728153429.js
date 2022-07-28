import React, { useState } from "react";

const AddJob = (props) => {
  const { addJob } = props;
  const { inputChange, setInputChange } = useState("");

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleAdd = () => {
    addJob('new job from addJob component')
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
