import React, { useState } from "react";
import "./Home.css";
import TaskForm from "../subcomponent/TaskForm/TaskForm";
import Tasks from "../subcomponent/Tasks/Tasks";

const Home = (props) => {
  const [tasks, setTasks] = useState([]);
  const addTask = function (task) {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <Tasks tasks = {tasks}/>
    </div>
  );
};

export default Home;
