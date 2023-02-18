import React from 'react';
import './App.scss';
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
  return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
  );
}

export default App;
