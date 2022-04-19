import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Card, CardBody, CardText } from "reactstrap";
import "./Home.css";

const TrainingAndDev = () => {
  return (
    <>
      <Container fluid className="training-dev">
        <Container>
        <Row>
          <div className="col-12 mt-4 mb-4">
            <div className="sub-heading">
              <h2>Training & Development</h2>
            </div>
          </div>
        </Row>
        <Row>
          <Col md={6}>
            <img
              className="img-fluid"
              alt=""
              src="https://www.rkcogroup.com/upload/blog/1524473146Employee-Training-and-Development.jpg"
            />
          </Col>
          <Col md={6}>
            <Card
            >
              <CardBody>
                <CardText>
                  "We have a large team of Technical Consultants spanning almost
                  across every aspect of Technology, Behavioural and Leadership
                  management. Our consultants are extremely professional and
                  highly qualified with deep real-time experience deployed in
                  different parts of the world.
                  <br /> <br />
                  This has been proposed to reduce the training cost of our
                  clients and get excellent candidates who are technically good.
                  This model has been proposed to Top CMM-5 level companies and
                  has been implemented successfully with many of our clients.
                  This process has been so successful for hiring fresher and
                  much economic way where we can cut down a huge amount spent
                  hiring & training the candidates"
                </CardText>
                <Button variant="warning">Contact us for more details</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  );
};

export default TrainingAndDev;
