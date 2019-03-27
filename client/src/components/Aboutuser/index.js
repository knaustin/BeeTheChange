import React from "react";
import Card from 'react-bootstrap/Card';
import './Aboutuser.scss'

function Aboutuser(props) {
  return (
    <Card className={"aboutUser"}>
      <Card.Body>
        <Card.Title>About This Farmer</Card.Title>
        <Card.Text>{props.user && props.user.About}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Aboutuser;
