import React from 'react';
import logo from '../../log.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div class="navbar">
                    <a href="">Tran</a>
                    <a href="">Account</a>
                    <a href="">Support us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header; <h1>This is header</h1>