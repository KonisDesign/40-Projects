import React, {useEffect} from 'react';
import AddTask from './components/AddTask';
import './App.css';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/b9a8cc2a2e.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <header><h1><i class="fa-solid fa-square-check"></i> To-Do List App</h1></header>
      <AddTask />
    </>
  );
}

export default App;
