import React from 'react';
import {Router, Route, Link, hashHistory } from 'react-router';

const Links = () =>
    <nav>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/">Home</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about">About</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/contact">Contact</Link>
        <br/>
    </nav>;


const Home = (props) =>
    <div>
        <h1>Home</h1>
        <Links />
        {props.children}
    </div>;

const About = () =>
    <div>
        <h1>about</h1>
        <Links />
    </div>;

const Contact = () =>
    <div>
        <h1>Contact</h1>
        <Links />
    </div>;



class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>
                    <Route path="about" component={About}></Route>
                    <Route path="contact" component={Contact}></Route>
                </Route>
            </Router>
    );
    }
}

export default App