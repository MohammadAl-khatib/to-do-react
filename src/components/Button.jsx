import React from "react";

const Button = ({ setIsModalOpen,  state, text, handler, variant}) => {
  const openModal = () => {
    handler && handler()
    setIsModalOpen(state);
  };

  return <div onClick={openModal} className={`button ${variant}`}>{text}</div>;
};

export default Button;
