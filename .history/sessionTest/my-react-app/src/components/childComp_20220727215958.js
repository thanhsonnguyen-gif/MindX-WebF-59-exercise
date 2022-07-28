import React from "react";

const ChildComp = (props) => {
  const { username, id, func } = props;
  func(console.log("hello from child"));
  return (
    <h2>
      {username} co id: {id}
    </h2>
  );
};

export default ChildComp;
