import { useState } from 'react';
import './App.css';
import Task from '../components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: event.target.value, completed: false }]);
      event.target.value = '';
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const switchCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <h1>TODO</h1>
      <input
        type="text"
        onKeyDown={addTask}
        placeholder="Add a new task"
      />

      <div className='tasks'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDiscard={() => removeTask(task.id)}
            onSwitchCompleted={() => switchCompleted(task.id)}
          />
        ))}
      </div>
      { tasks.length > 0 ? <p className='clear-tasks' onClick={() => 
        setTasks([])
      }>Clear all tasks</p> : <></>}
    </>
  );
}

export default App;