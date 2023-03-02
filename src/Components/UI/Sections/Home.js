import React from "react";
import { Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <Container fluid id="home">
      <Row className="justify-content-center my-4">
        <div className="w-75 text-center">
          <h2 className="my-4">Welcome to my portfolio site!</h2>
          <p>
            My name is Ido Tanne, and I am excited to share with you some of the
            projects I have worked on as a developer. I have a passion for
            creating intuitive, efficient, and user-friendly software, and I
            believe that my work reflects this.
          </p>
          <p>
            As you browse through my portfolio, you will find a diverse range of
            projects, each with its unique challenges and solutions. Whether
            it's a web application or a mobile app, I approach each project with
            the same level of dedication and attention to detail. I pride myself
            on being a problem solver and a team player, and I strive to create
            meaningful solutions that have a positive impact on the world.
          </p>
          <p>
            Thank you for taking the time to visit my site. I hope that you find
            it informative and engaging. Please feel free to reach out if you
            have any questions or if you would like to collaborate on a project.
            I look forward to hearing from you!
          </p>
        </div>
      </Row>
    </Container>
  );
};
