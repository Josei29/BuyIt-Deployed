import React from 'react';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import Home from "./components/mobile/Home/Home";
import Login from "./components/mobile/Login/Login";
import Signup from "./components/mobile/Signup/Signup";
import Overview from "./components/mobile/Overview/Overview";
import List from "./components/mobile/Overview/Lists/List/List";
import './App.css';
import { connect } from "react-redux";

const app = (props) => {
    let routes = (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/" />
        </Switch>
    );

    if (props.isAuth) {
        routes = (
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/overview" component={Overview} />
            <Route path="/list/:id" component={List} />
        </Switch>
        );
    };

    return(
        <div>
            {routes}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default withRouter(connect(mapStateToProps, null)(app));
