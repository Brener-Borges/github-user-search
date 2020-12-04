import React from 'react';
import './app.scss';
import './core/assets/styles/custom.scss';
import NavBar from './core/NavBar';
import Routes from './Routes';

const App = () => {
    return (
        <>
            <NavBar />
            <Routes />
        </>
    );
};

export default App;