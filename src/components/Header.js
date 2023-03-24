import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'

function Header() {
    return (
        <header>
            <a href='#a'>
                <img src={logo} alt="little lemon" width={150} />
            </a>
            <Nav></Nav>
        </header>
    )
}

export default Header