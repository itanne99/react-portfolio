import React from "react";
import { Container, Row } from "react-bootstrap";
import { MOCK_DATA } from "../../../Static/Data/Projects";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="my-3" id="projects">
      <h3 className="text-center mb-3">Projects</h3>
      <Container>
        <Row className="justify-content-center g-4" md={4}>
          {MOCK_DATA.map((project) => (
            <Project key={project.UUID} project={project}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};
