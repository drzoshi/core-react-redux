import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BackgroundImage from '../_resources/bg_login.jpg';

console.log("img ", BackgroundImage);
const styles = themes => ({
    root: {
        flexGrow: 1
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight:'100vh',        
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'no-repeat',
        backgroundSize: 'cover',
    }
});

class LoginLayout extends React.Component {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    {children}
                </div>
            </div>
        )
    }
}

LoginLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

const LoginLayoutWithStyles = withStyles(styles)(LoginLayout);
export { LoginLayoutWithStyles as LoginLayout };
