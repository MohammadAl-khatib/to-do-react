import React from "react";

const Button = ({ setIsModalOpen,  state, text, handler}) => {
  const openModal = () => {
    handler && handler()
    setIsModalOpen(state);
  };

  return <div onClick={openModal}>{text}</div>;
};

export default Button;
