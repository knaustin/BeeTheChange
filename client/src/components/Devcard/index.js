import React from "react";
import { Row, Col } from 'react-flexbox-grid';
import Image from 'react-bootstrap/Image';
import './Devcard.scss'

function Devcard(props) {
  return (
    <Container>
      <Col md={12}>
        <div className={"devCard container"}>
          <Row>
            <Image className={"devImage"} src={props.picture} roundedCircle />
          </Row>
          <Row>
            <h3 className={"devName"}>{props.title}</h3>
          </Row>
          <Row>
            <p className={"devAbout"}>{props.about}</p>
          </Row>
          <Row>
            { props.github && <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github devLink"></i></a> }
            { props.linkedin && <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin devLink"></i></a> }
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default Devcard;
