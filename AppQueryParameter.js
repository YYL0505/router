import React from 'react';
import {Router, IndexRoute, Route, Link, hashHistory } from 'react-router';

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to={ {pathname: "/user", query: {username: "Yingli", title: "Miss"}}} >Yingli</Link>
        <br/>
        <Link to={ {pathname: "/user", query: {username: "Anny", title: "Miss"}}} >Any</Link>
    </nav>;


const Home = (props) =>
    <div>
        <h1>Home</h1>
        <Links />
        {props.children}
    </div>;

const User = (props) =>
    <div>
        <h2>Hello {props.location.query.title || ''} {props.location.query.username || ''}</h2>
    </div>;


class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute component={User}></IndexRoute>
                    <Route path="user" component={User}></Route>
                </Route>
            </Router>
    );
    }
}

export default App