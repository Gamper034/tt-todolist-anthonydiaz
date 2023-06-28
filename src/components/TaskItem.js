import React from "react";

const TaskItem = ({ task }) => {
  const { id, title, completed } = task;
  return (
    <li>
      <span>{title}</span>
    </li>
  );
};

export default TaskItem;
