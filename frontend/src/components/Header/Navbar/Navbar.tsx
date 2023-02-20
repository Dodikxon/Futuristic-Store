import React from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";
import {logout} from "../../../store/action-creators/user";


function Button(props: any){
    return <Link to={props.link} className="header-btn">{props.name}</Link>
}


const Navbar = () => {
    const token = localStorage.getItem('token')
    if(token){
        return (
            <nav className="header-navbar">
                <Button link={'/'} name={'Store'}/>
                <Button link={'/sale'} name={'Sale'}/>
                <Button link={'/login'} onClick={logout()} name={'logout'}/>
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