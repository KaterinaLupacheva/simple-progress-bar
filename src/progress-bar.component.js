import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div bgcolor={bgcolor} completed={`${completed}%`}>
      <div className="filler">
        <span>{completed}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
