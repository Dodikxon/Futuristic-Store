import React from 'react';
import './Navbar.scss';
import Button from "../../Inputs/Button";
import {token} from "../../../api/api";


const Navbar = () => {
    if(token()){
        return (
            <nav className="header-navbar">
                <Button link={'/'} name={'Store'}/>
                <Button link={'/sale'} name={'Sale'}/>
                <Button link={'/login'} name={'logout'}/>
            </nav>
        )
    }
    return (
        <nav className="header-navbar">
            <Button link={'/'} name={'Store'}/>
            <Button link={'/login'} name={'Sign In'}/>
            <Button link={'/register'} name={'Sign Up'}/>
        </nav>
    );
};

export default Navbar;