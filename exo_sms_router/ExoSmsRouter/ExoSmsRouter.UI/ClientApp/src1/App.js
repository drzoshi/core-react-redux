import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import { history } from './_helpers'
import { alertActions } from "./_actions";
import PrivateRoute from './_components/PrivateRoute';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
//import { RegisterPage } from './RegisterPage';

import { createBrowserHistory } from 'history';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
export const history = createBrowserHistory({ basename: baseUrl });

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className='jumbotron'>
                <div className='container'>
                    <div className='col-sm-8 col-sm-offset-2'>                        
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path='/' component={HomePage} />
                                <Route path='/login' component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

//const connectedApp = connect(mapStateToProps)(App);
export default connect(mapStateToProps)(App);