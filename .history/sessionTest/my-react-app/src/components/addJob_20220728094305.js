import React, {useState} from "react";

const AddJob = (props) => {

const {handleAddJob} = props
const {inputChange, setInputChange} = useState('')

const handleChange=(e)=>{setInputChange(e.target.value)}


  return <>
  <input type="text" placeholder="input your work..." onChange={handleChange} value={inputChange}/>
  <button onClick={handleAddJob(inputChange)}>Add job</button>
  </>;
};

export default AddJob;
