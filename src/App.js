import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
    return (
        <React.Fragment>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
