import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import FrontNav from "../components/FrontNav";
import Nav from "../components/Nav";
import Slider from "../components/Slider/Slider";
import Wrapper from "../components/Wrapper";
import Section from '../components/Section';

class Main extends Component {
    render() {
        return (
            <Wrapper>
                {( this.props.auth.isAuthenticated()
                    ? <Nav />
                    : <FrontNav login={this.props.auth.login} />
                )}
                <Grid fluid>
                    <Section>
                        <Row>
                            <Col xs={12}>
                                <Slider />
                            </Col>
                        </Row>
                    </Section>
                </Grid>
            </Wrapper>
        );
    }
}

export default Main;
