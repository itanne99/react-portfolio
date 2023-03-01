import React from "react";
import { Container, Row } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";

export const Home = () => {
  return (
    <Container fluid id="home" className="">
      <Row className="justify-content-center my-4">
        <div className="w-75">
          <LoremIpsum p="4" />
        </div>
      </Row>
    </Container>
  );
};
