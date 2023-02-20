import React, {useEffect} from 'react';
import './App.scss';
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {useCookies} from "react-cookie";
import {tokenUpdate} from "./store/action-creators/user";


function App() {
    const [emailCookie, setEmailCookie] = useCookies(['email']);
    const [passwordCookie, setPasswordCookie] = useCookies(['password']);

    useEffect(()=>{
        if(emailCookie && passwordCookie){
            setTimeout( () => {
                tokenUpdate(emailCookie.email, passwordCookie.password)
            }, 3600000);
        }
    })
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    );
}

export default App;
