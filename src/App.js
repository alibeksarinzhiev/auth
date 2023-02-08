import React from 'react';
import Register from "./Components/Register/Register";
import './app.css'
import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                </Route>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>

        </>
    );
};

export default App;