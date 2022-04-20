import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Card, CardBody, CardText } from "reactstrap";
import "./Home.css";

const StatergicSourcing = () => {
  return (
    <>
      <Container className="strategic">
        <Row>
          <div className="col-12 mt-4 mb-4">
            <div className="sub-heading">
              <h2>Statergic Sourcing</h2>
            </div>
          </div>
        </Row>
        <Row>  
          <Col md={6} lg={6}>
            <img
              className="img-fluid"
              alt=""
              src="https://media.istockphoto.com/photos/right-way-to-light-bulb-picture-id1270087931?k=20&m=1270087931&s=612x612&w=0&h=tZc0-1KeAhi2qR0DPZMjcfZyqQgtn_-hGWOUNI1_Vko="
            />
          </Col>

          <Col md={6} lg={6}>
            <Card           >
              <CardBody>
                <CardText>
                  <h3>Permanent Staffing</h3>
                  <p>
                    We understand your passion for technology and help you to
                    hire employees, Who work as a team to achieve your goal. We
                    combine research and recruitment which enables us to have
                    great understanding of the technical areas in the respective
                    industries. We have built a strong relationship with some of
                    the Successful Technology companies in India and provide the
                    best candidates quikly, efficiently to solve your
                    recruitment needs.
                  </p>
                  <br />
                  <h3>Contract Staffing</h3>
                  <p>
                    We can help you with resources on contract when things are
                    uncertain and you still have the flexibility of an aglie
                    workforce which helps you run your business just like the
                    way you wish. We help you to build your team without hiring
                    them Permanently, help your team members when they are
                    averloaded at critical times.
                  </p>
                </CardText>
                <Button variant="warning">Contact us for more details</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StatergicSourcing;
