import React from "react";

const ChildComp = (props) => {
    const {username, id} = props
  return <h2>{username} co id: {id}</h2>;
};

export default ChildComp;
