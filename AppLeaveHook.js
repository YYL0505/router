import React from 'react';
import {Router, Link, Route, hashHistory } from 'react-router';
import Home from './Home';

const Links = () =>
    <nav>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/">Home</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about">About</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/contact">Contact</Link>
        <br/>
    </nav>;

const About = () =>
    <div>
        <h2>About</h2>
        <Links />
    </div>;

const Contact = () =>
    <div>
        <h2>Contact</h2>
        <Links />
    </div>;



class AppLeaveHook extends React.Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Router>
        );
    }
}
export default AppLeaveHook