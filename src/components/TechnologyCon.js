import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Card, CardBody, CardText } from "reactstrap";
import "./Home.css";
import techImage from '../Images/IT_Consulting.png'

const TechnologyCon = () => {
  return (
    <>
      <Container fluid className="tech-consulting">
        <Container>
        <Row>
          <div className="col-12 mt-4 mb-4">
            <div className="sub-heading">
              <h2>Technology Consulting</h2>
            </div>
          </div>
        </Row>
        <Row>
          <Col md={6} lg={6}>
            <img className="img-fluid"
              alt=""
              src={techImage}
            />
          </Col>
          <Col md={6} lg={6}>
            <Card>
              <CardBody>
                <CardText >
                  "To realize business value, improve performance, and sustain
                  compliance and other regulatory mandates, organizations look
                  at automated business software applications to help achieve
                  business goals.
                  <br /> <br />
                  The key is to understand and define business
                  process, choose the correct business application software
                  and map the business processes into the application to
                  realize process and control efficiencies, cost reductions,
                  and effective compliance management.
                  <br /> <br />
                  When designing and implementing such systems, an organization should seek a
                  balance across four dimensions: risk and controls, process
                  optimization, organization and people, and technology."
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

export default TechnologyCon;
