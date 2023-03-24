import { Container } from '@chakra-ui/react'
import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Home() {
    return (
        <Container maxWidth='1366px' className='app-container'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Container>
    )
}

export default Home;