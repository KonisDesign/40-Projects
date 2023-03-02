import React, { useState, createContext } from 'react';
import TaskList from './TaskList';

export const TaskContext = createContext();

function AddTask() {
  const [task, setTask] = useState(["Apprendre React", "Supprimer VueJS", "Boire un café"]);

  const handleClick = (value) => {
    if (value) {
      const newTask = [...task];
      newTask.unshift(value)
      setTask(newTask);
    }
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick(document.getElementById("myinput").value);
    }
  }

  return (
    <div className='container'>
      <div className='add-container'>
      <input id='myinput' type="text" onKeyUp={handleKeyPress}/>
      <button onClick={() => handleClick(document.getElementById("myinput").value)}>ADD</button>
      </div>
      {/* Fournir le contexte aux composants enfants */}
      <TaskContext.Provider value={{ task, setTask}}>
        <TaskList />
      </TaskContext.Provider>
    </div>
  );
}

export default AddTask;
