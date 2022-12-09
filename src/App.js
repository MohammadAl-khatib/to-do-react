import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import FilterBar from "./components/FilterBar";
import List from "./components/List";
import Modal from "./components/Modal";

const App = () => {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Header />
      <Button setIsModalOpen={setIsModalOpen} state={true} text="Add Task" />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setList={setList}
        list={list}
      />
      <FilterBar />
      <List list={list} />
    </div>
  );
};

export default App;
