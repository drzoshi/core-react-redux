import React from 'react';
//import { Col, Grid, Row } from 'react-bootstrap';
import BackgroundImage from './../content/bg_login.jpg';

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

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh'
    },
    card: {
        padding: theme.spacing.unit * 2,
        height: "100%",
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
});


function LoginForm(props) {
    const { classes, theme } = props;
    return (
        <Grid container className={classes.root}
            direction={'row'}
            justify={'flex-start'}
            alignItems={'center'}
        >
            <Grid item xs={12} sm={6} className={classes.cardWrap}>
                <Card className={classes.card}>
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <Grid
                            container direction={'column'} justify={'flex-start'} alignItems={'stretch'}
                            >
                                <TextField
                                    id="name"
                                    label="Email"
                                    className={classes.textField}
                                    //value={this.state.name}
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} >
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </Grid>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} >
                            <Button variant="contained" color="primary" size="small">Login</Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    )
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LoginForm);

//export default props => (
//    <Grid container className={classes.root}
//        direction={'row'}
//        justify={'flex-start'}
//        alignItems={'center'}
//        style={loginWrapStyle}
//    >
//        <Grid item xs={12} sm={6} className={classes.cardWrap} style={{ padding: 40 }}>
//            <Card className={classes.card} style={{ maxWidth: 300, backgroundColor: 'green' }}>
//                <CardContent>
//                    <form noValidate autoComplete="off">
//                        <Grid
//                            //container direction={'column'} justify={'flex-start'} alignItems={'stretch'}
//                        >
//                            <TextField
//                                id="name"
//                                label="Email"
//                                //className={classes.textField}
//                                //value={this.state.name}
//                                //onChange={this.handleChange('name')}
//                                margin="normal"
//                            />
//                        </Grid>
//                        <Grid
//                            //container
//                            //direction={'column'}
//                            //justify={'flex-start'}
//                            //alignItems={'stretch'}
//                        >
//                            <TextField
//                                id="password-input"
//                                label="Password"
//                                //className={classes.textField}
//                                type="password"
//                                autoComplete="current-password"
//                                margin="normal"
//                            />
//                        </Grid>
//                    </form>
//                </CardContent>
//                <CardActions>
//                    <Button variant="contained" color="primary" size="small">Login</Button>
//                </CardActions>
//            </Card>
//        </Grid>

//    </Grid>
//);


//export default props1 => (
//    <Grid container style={sectionStyle}>
//        <Grid item xs={3} sm={3} style={{
//            backgroundColor: 'transparent'
//        }}
//        >
//            <Grid container
//                direction={'row'}
//                justify={'center'}
//                alignItems={'center'}
//                style={{height:'100vh'}}
//            >
//                <Card style={{
//                    height: '40vh',
//                    width:'100%',
//                    backgroundColor: '#ffffff',
//                    color: 'black'                    
//                }}>
//                    <CardContent>
//                        <form noValidate autoComplete="off">
//                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'}>
//                                <TextField
//                                    id="name"
//                                    label="Email"
//                                    //className={classes.textField}
//                                    //value={this.state.name}
//                                    //onChange={this.handleChange('name')}
//                                    margin="normal"
//                                />
//                            </Grid>
//                            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'}>
//                                <TextField
//                                    id="password-input"
//                                    label="Password"
//                                    //className={classes.textField}
//                                    type="password"
//                                    autoComplete="current-password"
//                                    margin="normal"
//                                />
//                            </Grid>
//                        </form>                        
//                    </CardContent>
//                    <CardActions>
//                        <Button variant="contained" color="primary" size="small">Login</Button>
//                    </CardActions>
//                </Card>
//            </Grid>
//        </Grid>
//    </Grid>
//);