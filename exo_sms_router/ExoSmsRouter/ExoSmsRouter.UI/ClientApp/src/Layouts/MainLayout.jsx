import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

class MainLayout extends Component {
    render() {
        return (
            <div className="container">
                <Grid fluid>
                    <Row>
                        <Col sm={3}>
                            <NavMenu />
                            <Route path="/register" component={RegisterPage} />
                        </Col>
                        <Col sm={9}>
                            {props.children}
                        </Col>
                    </Row>
                </Grid>
                <div className="row">
                    <Navbar />
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default MainLayout;