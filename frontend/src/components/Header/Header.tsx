import React from 'react';
import './Header.scss';
import Navbar from "./Navbar/Navbar";
const Header = () => {
    return (
        <header>
            <div className="container">
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;