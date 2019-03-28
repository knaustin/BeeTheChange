import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import FrontNav from "../components/FrontNav";
import Nav from "../components/Nav";
import Slider from "../components/Slider/Slider";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
// import SectionC from "../components/SectionC";
import Wrapper from "../components/Wrapper";
import Section from '../components/Section';
import { Container } from "mdbreact";


class Main extends Component {
    render() {
        return (
            <Wrapper>
                {(this.props.auth.isAuthenticated()
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
                    <br />
                    <Section>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <SectionA />
                                </Col>
                            </Row>
                        </Container>
                    </Section>
                    <br />
                    <Section>
                        <Row>
                            <Col xs={12}>
                                <SectionB />
                            </Col>
                        </Row>
                    </Section>
                    <br />
                    {/* <Section>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <SectionC />
                                </Col>
                            </Row>
                        </Container>
                    </Section> */}
                </Grid>
            </Wrapper>
        );
    }
}

export default Main;
