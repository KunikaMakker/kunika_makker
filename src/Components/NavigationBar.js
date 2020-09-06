import React from 'react';
import '../cssfiles/navigation.css';
import logo from '../images/FullName.png';

function NavigationBar() {
    return(
        <header className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" className="logo-img"/>
                    </a>
                </div>
                <div className="header-container">
                    <nav className="webHeader">
                        <ul id="header" className="menu">
                            <li className="menu-items">Home</li>
                            <li className="menu-items">About</li>
                            <li className="menu-items">Skills</li>
                            <li className="menu-items">Education</li>
                            <li className="menu-items">Experience</li>
                            <li className="menu-items">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavigationBar;