import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuid } from "uuid";

const ModalInputField = ({ handleInput, taskName }) => (
  <div className="modal-input">
    <label htmlFor="" className="modal-label">
      Title
    </label>
    <input
      defaultValue={taskName || ""}
      className="modal-input"
      type="text"
      name="title"
      onChange={(e) => handleInput(e.target.value)}
    />
  </div>
);

const ModalSelectField = ({ handleInput, status }) => {
  return (
    <div className="modal-input">
      <label htmlFor="" className="modal-label">
        Status
      </label>
      <select
        defaultValue={status}
        className="modal-input"
        type="text"
        name="status"
        onChange={(e) => handleInput(e.target.value)}
      >
        <option value="incomplete">incomplete</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
};

const CloseButton = ({ setIsModalOpen }) => (
  <span
    className="modal-close-button"
    onClick={() => {
      setIsModalOpen(false);
    }}
  >
    x
  </span>
);

const closeModal = (setIsModalOpen) => {
  setIsModalOpen(false);
};

const updateTask = ({ title, status, taskToUpdate, setIsModalOpen }) => {
  taskToUpdate.title = title;
  taskToUpdate.status = status;
  closeModal(setIsModalOpen);
};

const addTask = ({ setIsModalOpen, list, setList, newTask }) => {
  closeModal(setIsModalOpen);
  setList([newTask].concat(list));
  localStorage.list = JSON.stringify([newTask].concat(list));
};

const modalTypeMapping = {
  add: {
    title: "add todo",
    buttonText: "add task",
    handler: addTask,
  },
  edit: {
    title: "update todo",
    buttonText: "update task",
    handler: updateTask,
  },
};

const getFormattedDate = (date) => new Date(date).toDateString();

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  setList,
  list,
  type,
  taskId,
  status,
  setStatus
}) => {
  
  const taskToUpdate = list.find((task) => task.id === taskId) || {};
  const [title, setTitle] = useState("");
  const id = uuid();
  const newTask = { title, status, id, date: getFormattedDate(Date.now()) };

  const handlerArguments = {
    add: {
      setIsModalOpen,
      list,
      setList,
      newTask,
    },
    edit: {
      title,
      status,
      taskToUpdate,
      setIsModalOpen,
    },
  };

  return (
    isModalOpen && (
      <div className="todo-modal" id="modal">
        <div className="modal-content">
          <CloseButton setIsModalOpen={setIsModalOpen} />
          <h2 className="modal-title">{modalTypeMapping[type].title}</h2>
          <ModalInputField
            handleInput={setTitle}
            taskName={type === "edit" && taskToUpdate.title}
          />
          <ModalSelectField
            handleInput={setStatus}
            status={status}
          />
          <div className="modal-buttons">
            <Button
              text={modalTypeMapping[type].buttonText}
              handler={() =>
                modalTypeMapping[type].handler({ ...handlerArguments[type] })
              }
              variant="submit"
            />
            <Button
              handler={() => closeModal(setIsModalOpen)}
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
