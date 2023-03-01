import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Project.css";

export const Project = (props) => {

  return (
    <Col>
      <Card
        className="text-white rounded"
        style={{ width: "15rem", height: "10rem" }}
      >
        <Card.Img
          className="overflow-auto rounded"
          src={
            "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Project IMG"
        />
        <a
          href={props.project.App_URL}
          target={`_blank`}
          className={'link-unstyled'}
        >
          <Card.ImgOverlay
            className={`d-flex hover-effect-background`}
            // style={{
            //   background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%)",
            // }}
            //   onClick={() => window.open(props.project.App_URL, "_blank")}
          >
            <Card.Body className="my-auto">
              <h5 className="text-center">{props.project.App_Name}</h5>
            </Card.Body>
          </Card.ImgOverlay>
        </a>
      </Card>
    </Col>
  );
};
