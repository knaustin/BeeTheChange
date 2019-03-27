import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Usercard.scss';
import { Row, Col } from 'react-bootstrap';


function Usercard(props) {
  return (
    <Container className={"profilePictureContainer"}>
            <Col md={6}></Col>
      <Col md={6}>
        <Row>
          <Image className={"profilePicture"} src={(props.user && props.user.Image) || 'https://via.placeholder.com/250'} roundedCircle />
        </Row>
        <Row><h3 className={"userHeader"}>{(props.user && props.user.Name) || ''}</h3></Row>
      </Col>
    </Container>
  );
}


  export default Usercard;
