import React from 'react';
import './App.scss';
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
  );
}

export default App;
