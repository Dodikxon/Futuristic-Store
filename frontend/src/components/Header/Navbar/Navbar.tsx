import React, {useState} from 'react';
import './Navbar.scss';
import Button from "../../Inputs/Button";
import {token} from "../../../api/api";


const Navbar = () => {
    const [navbarMobile, setNavbarMobile] = useState('navbar-close')
    const [openNavbarMenu, setOpenNavbarMenu] = useState(false)
    const [mobileNavbar, setMobileNavbar] = useState('Open')

    function openNavbarMobile(){
        if(openNavbarMenu == false){
            setNavbarMobile('navbar-open')
            setOpenNavbarMenu(true)
            setMobileNavbar('Close')
        }else{
            setNavbarMobile('navbar-close')
            setOpenNavbarMenu(false)
            setMobileNavbar('Open')
        }
    }

    if(token()){
        return (
            <nav className="header-navbar">
                <div className="header-navbar-desktop">
                    <Button link={'/'} name={'Store'}/>
                    <Button link={'/sale'} name={'Sale'}/>
                    <Button link={'/login'} name={'logout'}/>
                </div>
                <div className="header-navbar-mobile">

                    <ul className={`header-navbar-mobile-links`}>
                        <a onClick={openNavbarMobile} className="button mobile-button">
                            {mobileNavbar}
                        </a>
                        <ul className={`${navbarMobile}`}>
                            <Button link={'/'} name={'Store'}/>
                            <Button link={'/sale'} name={'Sale'}/>
                            <Button link={'/login'} name={'logout'}/>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
    return (
        <nav className="header-navbar">
            <div className="header-navbar-desktop">
                <Button link={'/'} name={'Store'}/>
                <Button link={'/login'} name={'Sign In'}/>
                <Button link={'/register'} name={'Sign Up'}/>
            </div>
            <div className="header-navbar-mobile">

                <ul className={`header-navbar-mobile-links`}>
                    <a onClick={openNavbarMobile} className="button mobile-button">
                        {mobileNavbar}
                    </a>
                    <ul className={`${navbarMobile}`}>
                        <Button link={'/'} name={'Store'}/>
                        <Button link={'/login'} name={'Sign In'}/>
                        <Button link={'/register'} name={'Sign Up'}/>
                    </ul>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;