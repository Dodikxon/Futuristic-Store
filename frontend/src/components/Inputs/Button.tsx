import React from 'react';
import './Input.scss';
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {logout} from "../../store/action-creators/user";


const Button = (props: any) => {
    const [passwordCookie, setPasswordCookie, removePasswordCookie] = useCookies(['password'])
    const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(['email'])
    if(props.name === 'logout'){
        const logoutAcc = () => {
            logout()
            removePasswordCookie('password')
            removeEmailCookie('email')
        };
        return(
            <a href={props.link} onClick={logoutAcc} className="button">{props.name}</a>
        );
    }else{
        return (
            <Link to={props.link} className="button">{props.name}</Link>
        );
    }
};

export default Button;