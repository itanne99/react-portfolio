import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <Container fluid id="about">
      <Row className="justify-content-center my-4">
        <h3 className="text-center">About Me</h3>
        <Container className="mt-3">
          <Row className="justify-content-evenly">
            <Col md={4} className="d-flex flex-column justify-content-center">
              <Row className="w-75 mx-auto">
                <Image
                  src={process.env.PUBLIC_URL + "/profile-pic.png"}
                  alt="Profile Picture of Ido"
                  width={`100%`}
                />
              </Row>
            </Col>
            <Col md={5} className="d-flex flex-column justify-content-center">
              <p>
                I am a React programmer with experience in back-end development
                using Flask and Django. I am passionate about finding innovative
                solutions to complex problems and enjoy the challenge of
                developing efficient and effective software. As a team player, I
                value collaboration and communication to ensure that projects
                are completed to the best of our abilities.
              </p>
              <p>
                I am constantly seeking to expand my knowledge and skills, and I
                take pride in my ability to adapt to new technologies and
                programming languages. I believe that continuous learning is
                essential in such a rapidly-evolving industry, and I am always
                looking for ways to improve my abilities. When working on a
                project, I prioritize clear communication, time management, and
                attention to detail to ensure that every aspect of the
                development process is executed to the highest standards. I am
                excited to continue my journey as a developer and contribute my
                skills to create impactful solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};
