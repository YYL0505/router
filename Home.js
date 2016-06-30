import React from 'react';
import {Link } from 'react-router';

const Links = () =>
    <nav>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/">Home</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/about">About</Link>
        <br/>
        <Link activeClassName="activeLink" activeStyle={{color: "#FF0000"}} to="/contact">Contact</Link>
        <br/>
    </nav>;


class Home extends React.Component {
    routerWillLeave(nextLocation) {
        return 'leaving home for ' + nextLocation.pathname;
    }

    componentWillMount(){
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Links />
                {this.props.children}
            </div>
        );
    }
};

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default Home