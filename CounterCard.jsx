import React, { useState } from 'react';

const CounterCard = ({ title, initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(initialCount);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>Count: {count}</p>
            {count === 0 && <p>Count is Zero!</p>}
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default CounterCard;
