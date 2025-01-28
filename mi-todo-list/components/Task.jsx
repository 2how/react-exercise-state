import React from 'react';

function Task({ task, onDiscard, onSwitchCompleted }) {
  return (
    <div className='task'>
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </p>
      <input type="checkbox" onChange={onSwitchCompleted} />
      <button onClick={onDiscard}>
        X
      </button>
    </div>
  );
}

export default Task;