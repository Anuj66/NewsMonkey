import './App.css';

import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<News key={"home"} category={"general"} country={"in"} />}></Route>
                    <Route exact path={'/general'} element={<News key={"general"} category={"general"} country={"in"} />}></Route>
                    <Route exact path={'/business'} element={<News key={"business"} category={"business"} country={"in"} />}></Route>
                    <Route exact path={'/entertainment'} element={<News key={"entertainment"} category={"entertainment"} country={"in"} />}></Route>
                    <Route exact path={'/health'} element={<News key={"health"} category={"health"} country={"in"} />}></Route>
                    <Route exact path={'/science'} element={<News key={"science"} category={"science"} country={"in"} />}></Route>
                    <Route exact path={'/sports'} element={<News key={"sports"} category={"sports"} country={"in"} />}></Route>
                    <Route exact path={'/technology'} element={<News key={"technology"} category={"technology"} country={"in"} />}></Route>
                </Routes>
            </div>
        )
    }
}