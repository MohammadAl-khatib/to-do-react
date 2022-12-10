import React, { useState } from "react";
import Button from "./Button";

const ModalInputField = ({ handleInput}) => (
  <div className="modal-input">
    <label htmlFor="" className="modal-label">
      Title
    </label>
    <input
      className="modal-input"
      type="text"
      name="title"
      onChange={(e) => handleInput(e.target.value)}
    />
  </div>
);

const ModalSelectField = ({ handleInput}) => (
  <div className="modal-input">
    <label htmlFor="" className="modal-label">
      Status
    </label>
    <select
      className="modal-input"
      type="text"
      name="status"
      onChange={(e) => handleInput(e.target.value)}
    >
      <option>Incomplete</option>
      <option>Complete</option>
    </select>
  </div>
);

const CloseButton = ({setIsModalOpen}) => (
  <span className="modal-close-button" onClick={() => setIsModalOpen(false)}>x</span>
)

const Modal = ({ isModalOpen, setIsModalOpen, setList, list }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const addTask = () => {
    const task = {
      title,
      status,
    };
    setList([task].concat(list));
  };

  return (
    isModalOpen && (
      <div className="todo-modal" id="modal">
        <div className="modal-content">
          <CloseButton setIsModalOpen={setIsModalOpen}/>
          <h2 className="modal-title">Add TODO</h2>
          <ModalInputField handleInput={setTitle} />
          <ModalSelectField handleInput={setStatus} />
          <div className="modal-buttons">
            <Button
              setIsModalOpen={setIsModalOpen}
              state={false}
              text="Add Task"
              handler={addTask}
              variant="submit"
            />
            <Button
              setIsModalOpen={setIsModalOpen}
              state={false}
              text="Cancel"
              variant="cancel"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
