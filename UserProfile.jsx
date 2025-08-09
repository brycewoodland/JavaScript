import React from 'react';

function UserProfile({ name, jobTitle, bio }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{jobTitle}</p>
            <p><em>{bio}</em></p>
        </>
    )
}

function MyApp() {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <UserProfile
                name="John Doe"
                jobTitle="Frontend Engineer"
                bio="A passionate developer who loves building user-friendly web applications."
            />
        </div>
    )
}

export default MyApp;