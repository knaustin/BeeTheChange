import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import { /* Grid,*/ Row, Col } from 'react-flexbox-grid';
import Slider from "../components/Slider/Slider";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// import Container from "react-bootstrap/Container";
import Section from '../components/Section';
import { Container } from "mdbreact";

// NOT SURE WHICH VERSION OF MAIN IS CURRECT

// class Main extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <FrontNav />
//         <Grid fluid>
//           <Section>
//             <Row>
//               <Col xs={12}>
//                 {/* <Container> */}
//                   <Slider />
//                 {/* </Container> */}
//               </Col>
//             </Row>
//           </Section>
//         </Grid>
//       </Wrapper>
//     );
//   }
// }

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <FrontNav />
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
        <Section>
          <Container>
            <Row>
              <Col xs={12}>
                <SectionC />
              </Col>
            </Row>
          </Container>
        </Section>
        <Footer />
      </Wrapper>
    )
  };
};

export default Main;

{/* <Wrapper> */}
  {/* <FrontNav /> */}
  {/* <Slider /> */}
  {/* <SectionA /> */}
  {/* <Footer /> */}
{/* </Wrapper> */}
