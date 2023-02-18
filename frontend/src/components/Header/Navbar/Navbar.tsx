import React from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";

function Button(props: any){
    return <Link to={props.link} className="header-btn">{props.name}</Link>
}
const Navbar = () => {
    return (
        <nav className="header-navbar">
            <Button link={'/login'} name={'Sign In'}/>
            <Button link={'/register'} name={'Sign Up'}/>
        </nav>
    );
};

export default Navbar;