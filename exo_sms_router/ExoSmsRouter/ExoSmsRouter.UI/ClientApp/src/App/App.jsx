import React, { Component } from 'react';
//import { Router, Route, Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'
import { Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'

import { connect } from 'react-redux';

import { history } from '../_helpers';
//import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { LoginLayout, MainLayout} from '../Layouts';
//import MainLayout from '../Layouts/MainLayout';

/*
  Layouts, inline define here for demo purpose
  you may want to define in another file instead
 */

//const DashboardLayout = ({ children, ...rest }) => {
//    return (
//        <div>
//            <div>
//                Sidebar Here
//            </div>
//            <div>{children}</div>
//        </div>
//        )
//}

//const LoginLayout = ({ children, ...rest })=>{
//    return (
//        <div>
//            <div>{children}</div>
//        </div>
//        )
//}

/*
  Route wrapper
 */

const MainRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <MainLayout>
                <Component {...matchProps} />
            </MainLayout>
        )} />
    )
}


const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LoginLayout>
                <Component {...matchProps} />
            </LoginLayout>
        )} />
    )
};

/*
   App
 */

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                       <Redirect to="/login" />
                    </Route >                   
                    <LoginLayoutRoute path="/login" component={LoginPage} />
                    <LoginLayoutRoute path="/signup" component={RegisterPage} />
                    <MainRoute path="/home" component={HomePage} />
                    <MainRoute path="/register" component={RegisterPage} />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 