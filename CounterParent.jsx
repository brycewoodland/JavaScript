import React, { useState } from 'react';

function CounterParent() {
    const [count, setCount] = useState(0);

    const handleIncrement = (step) => {
        setCount(count + step);
    }

    return (
        <div>
            <h1>{count}</h1>
            <CounterButton
                onClickButton={() => handleIncrement(5)}
                step={5}
            ></CounterButton>
        </div>
    )
}

function CounterButton( { onClickButton, step }) {
    return (
        <button onClick={onClickButton}>Increment by {step}</button>
    )
}

export default CounterParent;