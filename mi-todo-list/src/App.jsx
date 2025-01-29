import { useState, useCallback} from 'react';
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
            taskId={task.id}
            setTasks={setTasks}
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