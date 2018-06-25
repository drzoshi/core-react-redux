import React from 'react';
//import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import LayoutLogin from './components/LayoutLogin';

import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from './_components';
import { createBrowserHistory } from 'history';
//import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
//import LoginPage from './components/LoginPage';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

//export default () => (
//    <div className="jumbotron">
//        <div className="container">
//            <div className="col-sm-8 col-sm-offset-2">
//                <Router history={history}>
//                    <div>
//                        <PrivateRoute exact path="/" component={HomePage} />
//                        <Route path="/login" component={LoginPage} />

//                    </div>
//                </Router>
//            </div>
//        </div>
//    </div>
//);

export default () => (
    <LoginPage>
    </LoginPage>
);


//export default () => (
//  <Layout>
//    <Route exact path='/' component={Home} />
//    <Route path='/counter' component={Counter} />
//    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
//  </Layout>
//);
