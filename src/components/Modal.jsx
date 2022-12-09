import React, { useState } from "react";
import Button from "./Button";

const Modal = ({ isModalOpen, setIsModalOpen, setList, list }) => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')

  const addTask = () => {
    const task = {
        title,
        status
    }
    console.log(task);
    setList([task].concat(list))
  }

  return (
    isModalOpen && (
      <div className="todo-modal">
        <h2>Add TODO</h2>
        <label htmlFor="">Title</label>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="">Status</label>
        <input type="text" name="status" onChange={(e) => setStatus(e.target.value)}/>
        <Button setIsModalOpen={setIsModalOpen} state={false} text="Add Task" handler={addTask} />
        <Button setIsModalOpen={setIsModalOpen} state={false} text="Cancel" />
      </div>
    )
  );
};

export default Modal;
