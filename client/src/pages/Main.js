import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import { Row, Col } from 'react-flexbox-grid';
import Slider from "../components/Slider/Slider";
// import SectionA from "../components/SectionA";
// import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// import Container from "react-bootstrap/Container";
import Section from '../components/Section';
// import { Container } from "mdbreact";

class Main extends Component {
    render() {
        return (
            <Wrapper>
              <FrontNav />
                <Grid fluid>
                  <Section>
                    <Row>
                      <Col xs={12}>
                         {/* <Container> */}
                             <Slider />
                         {/* </Container> */}
                       </Col>
                    </Row>
                    </Section>
                </Grid>
            </Wrapper>
        )
    };
    };
export default Main;
    

{/* <Wrapper> */}
     {/* <FrontNav /> */}
     {/* <Slider /> */}
    {/* <SectionA  /> */}
     {/* <Footer />  */}
{/* </Wrapper> */}
