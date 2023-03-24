import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import logo from '../assets/Logo.svg'

function Footer() {
    return (
        <footer>
            <>
                <Grid templateColumns={'3.2fr 1.2fr 1.2fr 1.2fr'} gap={50} className='grid-adjustable-columns'>
                    <GridItem>
                        <img src={logo} alt="little lemon" width={150} />
                    </GridItem>
                    <GridItem>
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li><a href="#a">Home</a></li>
                            <li><a href="#a">About</a></li>
                            <li><a href="#a">Menu</a></li>
                            <li><a href="#a">Reservations</a></li>
                            <li><a href="#a">Order Online</a></li>
                            <li><a href="#a">Login</a></li>
                        </ul>
                    </GridItem>
                    <GridItem className='contact-info'>
                        <h4>Contact</h4>
                        <div>
                            <p>Address</p>
                            <p>Phone number</p>
                            <p>Email</p>
                        </div>
                    </GridItem>
                    <GridItem>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href="#a">Instagram</a></li>
                            <li><a href="#a">Facebook</a></li>
                            <li><a href="#a">Twitter</a></li>
                        </ul>
                    </GridItem>
                </Grid>
            </>
        </footer>
    )
}

export default Footer