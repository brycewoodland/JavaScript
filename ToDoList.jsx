import React from 'react';

function ToDoList({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                </li>
            ))}
        </ul>
    )
}

function App() {
  const tasks = ['Buy groceries', 'Walk the dog', 'Finish homework'];

  return (
    <div>
      <h1>My To-Do List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;