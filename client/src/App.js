// import React from 'react';
// import { Route, withRouter, Redirect, Switch } from "react-router-dom";
// import Home from "./components/mobile/Home/Home";
// import Login from "./components/mobile/Login/Login";
// import Signup from "./components/mobile/Signup/Signup";
// import Overview from "./components/mobile/Overview/Overview";
// import List from "./components/mobile/Overview/Lists/List/List";
// import './App.css';
// import { connect } from "react-redux";

// const app = (props) => {

//     let routes = (
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//             <Redirect to="/" />
//         </Switch>
//     );

//     if (props.isAuth) {
//         routes = (
//             <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//             <Route path="/overview" component={Overview} />
//             <Route path="/list/:id" component={List} />
//         </Switch>
//         );
//     };

//     return(
//         <div>
//             {routes}
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     };
// };

// export default withRouter(connect(mapStateToProps, null)(app));

import React, { useState, useEffect } from 'react';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";
import HomeMobile from "./components/mobile/Home/Home";
import LoginMobile from "./components/mobile/Login/Login";
import SignupMobile from "./components/mobile/Signup/Signup";
import OverviewMobile from "./components/mobile/Overview/Overview";
import ListMobile from "./components/mobile/Overview/Lists/List/List";

import HomeDesktop from "./components/desktop/Home/Home";
import OverviewDesktop from "./components/desktop/Overview/Overview";
import ListDesktop from "./components/desktop/List/List";

const app = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, []);

    let routes = null;

    if (width < 500) {
        // Mobiles/Tablets Routes
        routes = (
            <Switch>
                <Route exact path="/" component={HomeMobile} />
                <Route exact path="/login" component={LoginMobile} />
                <Route exact path="/signup" component={SignupMobile} />
                <Redirect to="/" />
            </Switch>
        );

        if (props.isAuth) {
            routes = (
                <Switch>
                    <Route exact path="/" component={HomeMobile} />
                    <Route exact path="/login" component={LoginMobile} />
                    <Route exact path="/signup" component={SignupMobile} />
                    <Route path="/overview" component={OverviewMobile} />
                    <Route path="/list/:id" component={ListMobile} />
                </Switch>
            );
        };
    } else {
        // Desktop Routes
        routes = (
            <Switch>
                <Route exact path="/" component={HomeDesktop} />
                <Redirect to="/" />
            </Switch>
        );

        if (props.isAuth) {
            routes = (
                <Switch>
                    <Route exact path="/" component={HomeDesktop} />
                    <Route exact path="/overview" component={OverviewDesktop} />
                    <Route exact path="/list/:id" component={ListDesktop} />
                </Switch>
            );
        };
    };

    return routes;
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default withRouter(connect(mapStateToProps, null)(app));
