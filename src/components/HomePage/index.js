import React from 'react';

const HomePage = ({ handleLogout }) => {
    return (
        <div>
            <h1>NeutrinoVPN</h1>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default HomePage;
