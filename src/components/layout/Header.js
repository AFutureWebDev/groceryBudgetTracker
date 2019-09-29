import React from 'react';
import {Link} from 'react-router-dom';
import Background from './Images/citrus.jpg';

function Header() {
    return (
        <header style = {headerStyle}>
            <h1>Grocery Buddy</h1>
            <Link style={linkStyle} to="/"> Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '250px',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: "Satisfy, cursive",
    fontSize: '50px',
    textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;