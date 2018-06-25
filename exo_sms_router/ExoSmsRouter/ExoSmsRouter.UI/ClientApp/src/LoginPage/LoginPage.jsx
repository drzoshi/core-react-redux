import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    card: {
        padding: theme.spacing.unit * 2,
        height: 250,
        maxWidth: 400,
        backgroundColor: '#ffffff70',
        color: theme.palette.text.secondary,
    },
    cardWrap: {
        padding: theme.spacing.unit * 10
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    textField: {
        fontSize: 16,//theme.fontSize.unit * 2,
        //marginLeft: theme.spacing.unit,
        //marginRight: theme.spacing.unit,
        //width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit * 2,
    },
});


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: 'superuser@exolutus.com',
            password: 'Apptest@1$#',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { classes, loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Grid item xs={12} sm={6} className={classes.cardWrap}>
                <form noValidate autoComplete="on" name="form" onSubmit={this.handleSubmit}>
                <Card className={classes.card}>
                    <CardContent>
                        
                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'}>
                                <TextField
                                    id="name"
                                    label="Email"
                                    className={classes.textField}
                                    name="username"  
                                    value={username}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} >
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    name="password" value={password} onChange={this.handleChange}
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} >
                                <Button type="submit" variant="contained" color="primary" size="small">
                                    Login
                                    {loggingIn &&
                                        <CircularProgress className={classes.rightIcon} style={{ color: '#ffffff' }} size={15} />
                                    }
                                </Button>
                        </Grid>
                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} >
                                <Button component={Link} to="/register" variant="contained" color="secondary" size="small">Register</Button>
                        </Grid>
                    </CardActions>
                    </Card>
                </form>
            </Grid>
        )
        //return (
        //    <div className="col-md-6 col-md-offset-3">
        //        <h2>Login</h2>
        //        <form name="form" onSubmit={this.handleSubmit}>
        //            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
        //                <label htmlFor="username">Username</label>
        //                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
        //                {submitted && !username &&
        //                    <div className="help-block">Username is required</div>
        //                }
        //            </div>
        //            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
        //                <label htmlFor="password">Password</label>
        //                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
        //                {submitted && !password &&
        //                    <div className="help-block">Password is required</div>
        //                }
        //            </div>
        //            <div className="form-group">
        //                <button className="btn btn-primary">Login</button>
        //                {loggingIn &&
        //                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        //                }
        //                <Link to="/register" className="btn btn-link">Register</Link>
        //            </div>
        //        </form>
        //    </div>
        //);
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const LoginPageWithStyles = withStyles(styles)(LoginPage);

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPageWithStyles);
export { connectedLoginPage as LoginPage }; 