import React from "react";

const Button = ({ text, handler, variant }) => {
  const openModal = () => {
    handler();
  };

  return (
    <div onClick={openModal} className={`button ${variant}`}>
      {text}
    </div>
  );
};

export default Button;
