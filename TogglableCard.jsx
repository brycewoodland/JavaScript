import React, { useState } from 'react';

function TogglableCard({ title, description }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <h2>{title}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide Description" : "Show Description"}</button>
            {isVisible && <p>{description}</p>}
        </>
    )
}

function MyApp() {
    return (
        <div>
            <TogglableCard
                title="Subaru"
                description="White - 2019 - Crosstrek"
            />
        </div>
    )
}