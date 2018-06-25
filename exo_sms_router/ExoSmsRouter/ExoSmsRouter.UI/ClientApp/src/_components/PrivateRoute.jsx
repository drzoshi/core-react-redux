import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainLayout } from '../Layouts';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)

//export const PrivateRoute = ({ component: Component, ...rest }) => (
//    <Route {...rest} render={props => (
//        localStorage.getItem('user')
//            ? <Component {...props} />
//            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//    )} />

//)