import { Container } from '@chakra-ui/layout';
import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
    return (
        <React.Fragment>
            <Container maxWidth='1366px' className='app-container'>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Container>
        </React.Fragment>
    );
}

export default App;
