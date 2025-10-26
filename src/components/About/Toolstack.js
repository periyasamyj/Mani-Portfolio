import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBlender,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
     
    </Row>
  );
}

export default Toolstack;
