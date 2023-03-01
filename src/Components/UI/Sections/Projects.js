import React from "react";
import { Container, Row } from "react-bootstrap";
import { MOCK_DATA } from "../../../Static/Data/MOCK_DATA";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="my-3">
      <h3 className="text-center">Projects</h3>
      <Container>
        <Row className="justify-content-center g-4" md={4}>
          {MOCK_DATA.map((project) => (
            <Project project={project}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};
