import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#b">About</Link></li>
                <li><Link to="#c">Menu</Link></li>
                <li><Link to="/">Reservations</Link></li>
                <li><Link to="#e">Order Online</Link></li>
                <li><Link to="#f">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav