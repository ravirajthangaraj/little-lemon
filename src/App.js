
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/reserve' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
