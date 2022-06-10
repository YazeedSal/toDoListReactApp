import React from 'react'
import Task from '../Task/Task'

const Tasks = ({tasks}) => {
    console.log(tasks);
  return (
    <div>{
        tasks.map((task)=>(
            <Task task = {task}/>
        )) 
        }</div>
  )
}

export default Tasks