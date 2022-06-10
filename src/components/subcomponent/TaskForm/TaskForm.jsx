import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    
  const [taskName, setTaskName] = useState("");
  const inputHandler = (event) => {
    const newValue = event.target.value;
    setTaskName(newValue);
  };
  const addTaskHandler = function () {
    const task = {
      title: taskName,
      done: false,
      creationDate: Date.now(),
    };
    addTask(task);
    setTaskName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter Task Title"
        value={taskName}
        onChange={inputHandler}
      />
      <button onClick={addTaskHandler}>add Task</button>
    </div>
  );
};

export default TaskForm;
