import React from "react";

const buttonStyle = {
  margin: '10px 0'
};

function Button ({ label, handleClick }) {
  return (
    <button
    className="btn btn-default"
    onClick={handleClick}
  >
    {label}
  </button>
  );
}

export default Button;