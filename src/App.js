import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import FilterBar from "./components/FilterBar";
import List from "./components/List";
import Modal from "./components/Modal";

const openModal = (setModalType, setIsModalOpen) => {
  setModalType("add");
  setIsModalOpen(true);
};

const App = () => {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [taskId, setTaskId] = useState("");
  const [status, setStatus] = useState("incomplete");

  return (
    <div>
      <Header />
      <div className="container">
        <div className="add-and-filter">
          <Button
            setIsModalOpen={setIsModalOpen}
            state={true}
            text="Add Task"
            variant="submit"
            handler={() => openModal(setModalType, setIsModalOpen)}
          />
          <FilterBar />
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setList={setList}
        list={list}
        type={modalType}
        taskId={taskId}
        setStatus={setStatus}
        status={status}
      />
      <List
        list={list}
        setList={setList}
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
        setTaskId={setTaskId}
        setStatus={setStatus}
        status={status}
      />
    </div>
  );
};

export default App;
