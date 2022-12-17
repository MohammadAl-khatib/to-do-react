import React from "react";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as PenIcon } from "../assets/icons/pen.svg";

const removeTask = (setList, list, id) => {
  const newList = list.filter((task) => task.id !== id);
  setList(newList);
};

const updateTask = (setIsModalOpen, setModalType, setTaskId, taskId) => {
  setIsModalOpen(true);
  setModalType("edit");
  setTaskId(taskId);
};

const List = ({ list, setList, setIsModalOpen, setModalType, setTaskId }) => {
  return (
    !!list.length && (
      <div>
        {list.map(({ title, id, date }) => {
          return (
            <div key={id} className="task-container">
              <div className="task">
                <input type="checkbox" />
                <div className="task-details">
                  <h4>{title}</h4>
                  <span>{date}</span>
                </div>
              </div>
              <div className="task-buttons">
                <div
                  className="icon-container"
                  onClick={() => removeTask(setList, list, id)}
                >
                  <TrashIcon className="icon" />
                </div>
                <div className="icon-container">
                  <PenIcon
                    className="icon"
                    onClick={() => updateTask(setIsModalOpen, setModalType, setTaskId, id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default List;
