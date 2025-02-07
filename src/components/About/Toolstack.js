import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  //SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import {
    DiVisualstudio,
    DiSwift
  } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      {<SiFigma /> }
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;