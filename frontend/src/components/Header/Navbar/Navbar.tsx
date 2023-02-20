import React from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";
import {logout} from "../../../store/action-creators/user";
import {useCookies} from "react-cookie";


function Button(props: any){
    return <Link to={props.link} className="header-btn">{props.name}</Link>
}



function Logout(props: any){
    return <a href={props.link} onClick={props.click} className="header-btn">{props.name}</a>
}


const Navbar = () => {
    const [passwordCookie, setPasswordCookie, removePasswordCookie] = useCookies(['password'])
    const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(['email'])

    function logoutAcc(){
        logout()
        removePasswordCookie('password')
        removeEmailCookie('email')
    }
    const token = localStorage.getItem('token')
    if(token){
        return (
            <nav className="header-navbar">
                <Button link={'/'} name={'Store'}/>
                <Button link={'/sale'} name={'Sale'}/>
                <Logout link={'/login'} click={logoutAcc} name={'logout'}/>
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