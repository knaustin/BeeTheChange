import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from 'react-bootstrap/Container';
import Devcard from '../components/Devcard';
import Allie from '../assets/images/allie.jpg';
import Kristen from '../assets/images/kristen.jpg';
import Michelle from '../assets/images/michelle.png';
import Krista from '../assets/images/krista.jpg';

class Devpage extends Component {
    render() {
        return (
            <Wrapper>
                <Nav />
                <Grid fluid>
                    <Container>
                        <Row className={"devHeader"}>Developers</Row>
                        <Row>
                            <Col xs={3}>
                                <Devcard
                                    picture={Allie}
                                    title="Allie Valder"
                                    about="Allie likes cats and coffee"
                                    github="https://github.com/avalder01"
                                    linkedin="https://www.linkedin.com/in/allisonvalder/"
                                />
                            </Col>
                            <Col xs={3}>
                                <Devcard
                                    picture={Kristen}
                                    title="Kristen Austin"
                                    about="When Kristen is not plugging away at the React documentation, you might find her snuggled up on the couch with her Bunny, Voxel, and her dog, Pixel, enjoying a warm cup of tea and listening to a podcast. Proud Mother of two human children and four fur-children, she gains inspiration by her desire to be a postive influence on her young children."
                                    github="https://github.com/knaustin"
                                    linkedin="https://www.linkedin.com/in/kristen-austin-a6638a123/"
                                />
                            </Col>
                            <Col xs={3}>
                                <Devcard
                                    picture={Michelle}
                                    title="Michelle Poplin"
                                    about="A career Manager/Purchasing Agent ready for that BIG change. A leader that enjoys rocking the boat. For me, there is no box - it is what I make it to be."
                                    github="https://github.com/michellepoplin"
                                />
                            </Col>
                            <Col xs={3}>
                                <Devcard
                                    picture={Krista}
                                    title="Krista Brehm"
                                    about="I am a FullStack Developer living in Charlotte NC and am looking for a job in FrontEnd Development. When I am not coding I am either reading, managing my cats Instagram, or trying out a new recipe from youtube."
                                    github="https://github.com/KbrehmCoding"
                                    linkedin="https://www.linkedin.com/in/kristabrehm/"
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

export default Devpage;
