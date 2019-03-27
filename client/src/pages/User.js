import React, { Component } from "react";
import MainNav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tiers from '../components/Tiers';
import Container from 'react-bootstrap/Container';
import PostsContainer from '../components/PostsContainer';
import Postform from "../components/Postform";
// import Followcard from '../components/Followcard';
import Aboutuser from '../components/Aboutuser';
import API from '../utils/API';

const messages = [
    {
        id: 'message11',
        user: 'Test User 1',
        message: 'Test Message 1',
    },
    {
        id: 'message12',
        user: 'Test User 2',
        message: 'Test Message 2',
    },
    {
        id: 'message13',
        user: 'Test User 3',
        message: 'Test Message 3',
    },
    {
        id: 'message14',
        user: 'Test User 4',
        message: 'Test Message 4',
    },
    {
        id: 'message15',
        user: 'Test User 5',
        message: 'Test Message 5',
    }
];

const DivStyle = {
    marginBottom: "50px",
};

class User extends Component {
    state = {
        farmer: null,
        selectedPostId: null,
    };

    componentDidMount() {
        API.getFarmer(this.props.match.params.id)
            .then(res => this.setState({ farmer: res.data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Wrapper>
                <MainNav />
                <Usercover>
                    <Row>
                        <Col md={6}>
                            <Usercard user={this.state.farmer} />
                        </Col>
                        <Col md={3}></Col>
                        <Col md={3}>
                            {/* <Followcard /> */}
                        </Col>
                    </Row>
                </Usercover>
                <Grid fluid>
                    <Container style={DivStyle}>
                        <Row>
                            <Col md={3}>
                                <Aboutuser user={this.state.farmer} />
                            </Col>
                            <Col xs={6}>
                                <Container>
                                    <Postform />
                                    <PostsContainer messages={messages} />
                                </Container>
                            </Col>
                            <Col md={3}>
                                <Tiers
                                    tierlevel="Getting Started"
                                    tierprice="$5"
                                    tierdescription="Help pay for the care of the Bee's and get updates"
                                />
                                <Tiers
                                    tierlevel="Help A Hive"
                                    tierprice="$10"
                                    tierdescription="Sponsor Bee care and get 1 bottle of honey"
                                />
                                <Tiers
                                    tierlevel="Start A Hive"
                                    tierprice="$150"
                                    tierdescription="Start a hive, get 10% of the honey output every season"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Grid>
                    <Footer />
            </Wrapper>
        );
    }
}

export default User;
