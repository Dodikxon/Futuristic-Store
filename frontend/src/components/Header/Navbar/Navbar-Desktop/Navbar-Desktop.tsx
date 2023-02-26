import React from 'react';
import {token} from "../../../../api/api";
import Button from "../../../Inputs/Button";
import './Navbar-Desktop.scss';

const NavbarDesktop = () => {
    if(token()){
        return (
            <nav className="navbar-desktop">
                <ul className="navbar-desktop-link">
                    <Button link={'/'} name={'Store'}/>
                </ul>
                <ul className="navbar-desktop-link">
                    <Button link={'/sale'} name={'Sale'}/>
                </ul>
                <ul className="navbar-desktop-link">
                    <Button link={'/login'} name={'logout'}/>
                </ul>
            </nav>
        )
    }
    return (
        <nav className="navbar-desktop">
            <ul className="navbar-desktop-link">
                <Button link={'/'} name={'Store'}/>
            </ul>
            <ul className="navbar-desktop-link">
                <Button link={'/login'} name={'Sign In'}/>
            </ul>
            <ul className="navbar-desktop-link">
                <Button link={'/register'} name={'Sign Up'}/>
            </ul>
        </nav>
    );
};

export default NavbarDesktop;