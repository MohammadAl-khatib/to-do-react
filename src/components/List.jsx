import React from "react";

const List = ({ list }) => {
  return !!list.length ? (
    list.map((item, index) => {
      return (
        <div key={index}>
          <span>{item.title}</span>
        </div>
      );
    })
  ) : (
    <div></div>
  );
};

export default List;
