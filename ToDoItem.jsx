import React from 'react';

const ToDoItem = ({ id, title, completed, onToggle, onDelete }) => {
    return (
        <div>
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
            <input 
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)} 
            />
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
};

export default ToDoItem;