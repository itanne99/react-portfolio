import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

export const AboutMe = () => {
  return (
    <Container fluid id="home" className="">
      <Row className="justify-content-center my-4">
        <h3 className="text-center">About Me</h3>
        <Container className="mt-3">
          <Row>
            <Col className="d-flex justify-content-center">
              <Avatar className="rounded"/>
            </Col>
            <Col>
              <LoremIpsum p="2" />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};
