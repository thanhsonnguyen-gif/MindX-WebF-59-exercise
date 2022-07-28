import React from "react";

const ChildComp = (props) => {
    const {name, id} = props
  return <h2>`${name} co id: ${id}`</h2>;
};

export default ChildComp;
