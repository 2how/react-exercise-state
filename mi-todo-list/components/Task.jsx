import React from 'react';

const Task = React.memo(({ task, setTasks }) => {

  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.filter((filteredTask) => filteredTask.id !== task.id));
  };

  const switchCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.map((mappedTask) =>
        mappedTask.id === task.id ? { ...mappedTask, completed: !mappedTask.completed } : mappedTask
      )
    );
  };

  return (
    <div className='task'>
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </p>
      <input type="checkbox" onChange={switchCompleted} />
      <button onClick={removeTask}>
        X
      </button>
    </div>
  );
})

export default Task;