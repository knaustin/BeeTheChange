import React from "react";
import './SectionC.scss';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function SectionC() {
  return (
    <section>
      <ButtonToolbar className="bttnGroup">
        <Button className="registerBttn" variant="primary" size="lg" href="#">
          Register
        </Button>
        <Button className="logInBttn" variant="secondary" size="lg" href="#">
          Log In
        </Button>
      </ButtonToolbar>
    </section>
  );
}

export default SectionC;
