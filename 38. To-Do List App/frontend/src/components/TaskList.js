import React, { useContext } from 'react';
import { TaskContext } from './AddTask';

function TaskList() {
  
  const { task, setTask } = useContext(TaskContext);

  const handleClick = (index) => {
    const newTask = [...task]
    newTask.splice(index, 1)
    setTask(newTask)
    console.log(newTask)
  }

  const handleChange = (index, value) => {
    const newTask = [...task]
    newTask.splice(index, 1, value)
    setTask(newTask)
    console.log(newTask)
  }

  return (
    <div className='list-container'>
      {task.map((item, index) => (
        <div key={index} className="item">
          <div className='options'>
            <input type="text" value={item} onChange={(e) => handleChange(index, e.target.value)} />
          </div>
          <button onClick={() => handleClick(index)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
