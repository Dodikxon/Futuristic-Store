import React from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";

function Button(props: any){
    return <Link to={'/'} className="header-btn">{props.name}</Link>
}
const Navbar = () => {
    return (
        <nav className="header-navbar">
            <Button name={'Sign In'}/>
            <Button name={'Sign Up'}/>
        </nav>
    );
};

export default Navbar;