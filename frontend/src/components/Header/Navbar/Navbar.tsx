import React from 'react';
import NavbarDesktop from "./Navbar-Desktop/Navbar-Desktop";
import NavbarMobile from "./Navbar-Mobile/Navbar-Mobile";

const Navbar = () => {
    return (
        <>
            <NavbarDesktop />
            <NavbarMobile />
        </>
    );
};

export default Navbar;