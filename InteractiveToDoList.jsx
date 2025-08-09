import React, { useState } from 'react';

function InteractiveToDoList({ title }) {
    const [taskArray, setTaskArray] = useState(['Buy milk', 'Walk the dog']);
    const [taskValue, setTaskValue] = useState('');

    const handleAddTask = () => {
        if (taskValue.trim() !== '') {
            setTaskArray([...taskArray, newValue]);
            setTaskValue('');
        }
    };

    const handleRemoveTask = (indexToRemove) => {
        const updatedTasks = taskArray.filter((_, index) => index !== indexToRemove);
        setTaskArray(updatedTasks)
    }

    return (
    <>
        <h1>{title}</h1>
        <input type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {taskArray.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={handleRemoveTask}>Remove Task</button>
                </li>
            ))}
        </ul>
    </>
    )
}

function MyApp() {
    return (
        <InteractiveToDoList
            title="To-Do List"
        />
    )
}

export default MyApp;