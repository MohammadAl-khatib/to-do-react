import React from "react";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as PenIcon } from "../assets/icons/pen.svg";
import createList from "../utils/createList";

const removeTask = (setList, list, id) => {
  const newList = list.filter((task) => task.id !== id);
  createList(setList, newList)
};

const updateTask = (setIsModalOpen, setModalType, setTaskId, taskId) => {
  setIsModalOpen(true);
  setModalType("edit");
  setTaskId(taskId);
};

const handleCheckBox = (checked, item, list, setList, setStatus) => {
  item.status = checked ? "completed" : "incomplete";
  setStatus(checked ? "completed" : "incomplete")
  createList(setList, [...list])
};

const List = ({ list, setList, setIsModalOpen, setModalType, setTaskId,
  setStatus }) => {
  return (
    !!list.length && (
      <div>
        {list.map((item) => {
          return (
            <div key={item.id} className="task-container">
              <div className="task">
                <input
                  checked={item.status === "completed" ? "checked" : ""}
                  type="checkbox"
                  onChange={(e) =>
                    handleCheckBox(e.target.checked, item, list, setList, setStatus)
                  }
                />
                <div className="task-details">
                  <h4 className={item.status}>{item.title}</h4>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="task-buttons">
                <div
                  className="icon-container"
                  onClick={() => removeTask(setList, list, item.id)}
                >
                  <TrashIcon className="icon" />
                </div>
                <div className="icon-container">
                  <PenIcon
                    className="icon"
                    onClick={() =>
                      updateTask(
                        setIsModalOpen,
                        setModalType,
                        setTaskId,
                        item.id
                      )
                    }
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
