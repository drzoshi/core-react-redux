import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ListItem, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    navLink: {
        margin: 0,
        padding: 0,
    },
    navItem: {
        padding:0,
    }
});


class MainLayout extends React.Component {   
    constructor(props) {
        super(props);

        this.state = {
            anchor: 'left'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            anchor: event.target.value,
        });
    }

    render() {
        const { classes, children, ...rest } = this.props;
        const { anchor } = this.state;
        const navLinkProp = {
            direction: 'column',
            justify: 'center',
            alignItems: 'stretch'
        };

        const drawer = (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem className={classes.navItem}>
                        <Grid container className={classes.navLink} direction={navLinkProp.direction} justify={navLinkProp.justify} alignItems={navLinkProp.alignItems}>
                            <Button component={Link} to="/home" >Home</Button>
                        </Grid>
                    </ListItem>
                    <ListItem className={classes.navItem}>
                        <Grid container className={classes.navLink} direction={navLinkProp.direction} justify={navLinkProp.justify} alignItems={navLinkProp.alignItems}>
                            <Button component={Link} to="/Register">Register</Button>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem className={classes.navItem}>
                        <Grid container className={classes.navLink} direction={navLinkProp.direction} justify={navLinkProp.justify} alignItems={navLinkProp.alignItems}>
                            <Button component={Link} to="/login">Logout</Button>
                        </Grid>
                    </ListItem>
                </List>
            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>                
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                    >
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap>
                                Permanent drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <div>{children}</div>
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
const MainLayoutWithStyles = withStyles(styles)(MainLayout);
export { MainLayoutWithStyles as MainLayout };
//export default withStyles(styles)(MainLayout);



//import React from 'react';
//import { Col, Grid, Row } from 'react-bootstrap';

//class MainLayout extends Component {
//    render() {
//        return (
//            <div className="container">
//                <Grid fluid>
//                    <Row>
//                        <Col sm={3}>
//                            <Route path="/register" component={RegisterPage} />
//                        </Col>
//                        <Col sm={9}>
//                            {props.children}
//                        </Col>
//                    </Row>
//                </Grid>
//                <div className="row">

//                </div>
//                {this.props.children}
//            </div>
//        );
//    }
//}
//export default MainLayout;