import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </Router>

        </>
    );
}

export default App;
