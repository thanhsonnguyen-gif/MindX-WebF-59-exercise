import React, {useState} from "react";

const AddJob = () => {

    const {inputChange, setInputChange} = useState('')

const handleChange=(e)=>{console.log(e)}
const handleAddJob=()=>{}

  return <>
  <input type="text" placeholder="input your work..." onChange={handleChange} value={inputChange}/>
  <button onClick={handleAddJob}>Add job</button>
  </>;
};

export default AddJob;
