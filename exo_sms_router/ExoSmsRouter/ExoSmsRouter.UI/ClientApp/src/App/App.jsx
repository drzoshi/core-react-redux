import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import MainLayout from '../Layouts/MainLayout';
import EmptyLayout from '../Layouts/EmptyLayout';

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
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>

                            <Route component={MainLayout}>
                                <PrivateRoute exact path="/" component={MainLayout} />                            
                                <Route path="/register" component={RegisterPage} />
                                <Link to="/login">Logout</Link>
                            </Route>
                            <Route component={EmptyLayout}>
                                <Route path="/login" component={LoginPage} />
                            </Route>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
    //render() {
    //    const { alert } = this.props;
    //    return (
    //        <div className="jumbotron">
    //            <div className="container">
    //                <div className="col-sm-8 col-sm-offset-2">
    //                    {alert.message &&
    //                        <div className={`alert ${alert.type}`}>{alert.message}</div>
    //                    }
    //                    <Router history={history}>
    //                        <div>
    //                            <PrivateRoute exact path="/" component={HomePage} />
    //                            <Route path="/login" component={LoginPage} />
    //                            <Route path="/register" component={RegisterPage} />
    //                        </div>
    //                    </Router>
    //                </div>
    //            </div>
    //        </div>
    //    );
    //}
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 