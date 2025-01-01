// This file serves as the entry point of the application. It initializes the app, sets up the main rendering logic, and manages the state of the phoneme inventory.

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import PhonemeInventory from './components/PhonemeInventory';

const App = () => {
    return (
        <div className="app">
            <h1>Phoneme Sound Alchemy</h1>
            <PhonemeInventory />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));