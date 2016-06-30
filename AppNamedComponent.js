import React from 'react';
import {Router, IndexRoute, Route, Link, hashHistory } from 'react-router';

const Links = () =>
    <nav>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/">Home</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/contact">Contact</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about">About</Link>
        <br/>
    </nav>;


const HomeHeader = () =>
    <div>
        <h1>Home</h1>
    </div>;

const HomeBody = () =>
    <div>
        this is home body
    </div>;

const AboutHeader = () =>
    <div>
        <h1>About</h1>
    </div>;

const AboutBody = () =>
    <div>
        this is about body
    </div>;

const ContactHeader = () =>
    <div>
        <h1>Contact</h1>
    </div>;

const ContactBody = () =>
    <div>
        this is contact body
    </div>;

const Container = (props) =>
    <div>
        <Links />
        {props.head}
        {props.body}
    </div>



class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={ {head: HomeHeader, body: HomeBody} }></IndexRoute>
                    <Route path="about" component={ {head: AboutHeader, body: AboutBody} }></Route>
                    <Route path="contact" component={ {head: ContactHeader, body: ContactBody} }></Route>
                </Route>
            </Router>
    );
    }
}

export default App