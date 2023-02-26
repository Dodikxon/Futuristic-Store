import React, {useState} from 'react';
import './Navbar-Mobile.scss';
import {token} from "../../../../api/api";
import Button from "../../../Inputs/Button";

const NavbarMobile = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [openMenuClass, setOpenMenuClass] = useState('')
    const [openSublinksClass, setOpenSublinksClass] = useState('')
    function OpenMenu(){
        if(isOpenMenu){
            setOpenMenuClass('')
            setIsOpenMenu(false)
            setOpenSublinksClass('')
        }else{
            setOpenMenuClass('change')
            setIsOpenMenu(true)
            setOpenSublinksClass('openSublinks')
        }
    }
    if(token()){
        return (
            <nav className="navbar-mobile">
                <ul className={`navbar-mobile-link${openSublinksClass}`}>
                    <li className={`navbar-mobile-link-menu ${openMenuClass}`} onClick={OpenMenu}>
                        <div className={`bar1`}></div>
                        <div className={`bar2`}></div>
                        <div className={`bar3`}></div>
                    </li>
                    <ul className={`navbar-mobile-link-sublinks ${openSublinksClass}`}>
                        <Button link={'/'} name={'Store'}/>
                        <Button link={'/sale'} name={'Sale'}/>
                        <Button link={'/login'} name={'logout'}/>
                    </ul>
                </ul>
            </nav>
        )
    }
    return (
        <nav className="navbar-mobile">
            <ul className={`navbar-mobile-link${openSublinksClass}`}>
                <li className={`navbar-mobile-link-menu ${openMenuClass}`} onClick={OpenMenu}>
                    <div className={`bar1`}></div>
                    <div className={`bar2`}></div>
                    <div className={`bar3`}></div>
                </li>
                <ul className={`navbar-mobile-link-sublinks ${openSublinksClass}`}>
                    <Button link={'/'} name={'Store'}/>
                    <Button link={'/login'} name={'Sign In'}/>
                    <Button link={'/register'} name={'Sign Up'}/>
                </ul>
            </ul>
        </nav>
    );
};

export default NavbarMobile;