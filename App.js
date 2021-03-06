import React from 'react';
import {Router, IndexRoute, Route, Link, hashHistory, Redirect, useRouterHistory } from 'react-router';
import {createHashHistory} from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const Links = () =>
    <nav>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/">Home</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/users/Yingli">User</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about">About</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about-us">About US</Link>
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

const Index = () =>
    <div>
        <h2>Index</h2>
    </div>;

const User = (props) =>
    <div>
        <h2>Hello {props.params.username}</h2>
    </div>;

const About = () =>
    <div>
        <h2>About</h2>
    </div>;

const Contact = () =>
    <div>
        <h2>Contact</h2>
    </div>;



class App extends React.Component {
    render() {
        return (
            <Router history={appHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute component={Index}></IndexRoute>
                    <Route path="users/(:username)" component={User}></Route>
                    <Route path="about" component={About}></Route>
                    <Route path="contact" component={Contact}></Route>
                    <Redirect from="about-us" to="about"></Redirect>
                </Route>
            </Router>
    );
    }
}

export default App