import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Card, CardBody, CardText } from "reactstrap";
import "./Home.css";

const DigitalTrans = () => {
  return (
    <>
      <Container fluid className="digital-trans">
        <Container>
          <Row>
            <div className="col-12 mt-4 mb-4">
              <div className="sub-heading">
                <h2>Digital Transformation</h2>
              </div>
            </div>
          </Row>
          <Row>
            <Col md={6} lg={6}>
              <img className="img-fluid"
                alt=""
                src="https://media.istockphoto.com/photos/digital-transformation-technology-strategy-digitization-and-of-and-picture-id1072111648?k=20&m=1072111648&s=612x612&w=0&h=m1UVi3Kh86AQmsxZQnyPwZ9gWOONrk-umW7SPLU1J40="
              />
            </Col>
            <Col md={6} lg={6}>
              <Card>
                <CardBody>
                  <CardText>
                    Digital Transformation is inspiring new standards of business and growth.Existing products are reinvented, manual processes are swapped for automated models, and decision-making turns more precise with data. Digital Transformation, therefore, is far more than just a technology switch. It's about training people and changing processes to get more out of the most powerful tool in business.
                  </CardText>
                  <CardText>Technologies such as Artificial Intelligence, cloud computing, the Internet of Things, and more are fundamentally changing businesses the world over. While it's natural to go  about emerging digital technologies, it's also essential to address the duality of adopting new digital offerings while re-structuring legacy systems, or eliminating them altogether. This is exactly where a Digital Transformation Company can help.</CardText>

                </CardBody>
              </Card>
            </Col>
            <Col md={12} lg={12}>
              <CardText className="mt-4">
                How we can help at MFRESK, we help businesses with their digital transformation. Our experts continually ideate and prototype new concepts in our dedicated Center of Excellence with an aim to architect new models of disruption. We also help you build and deploy customized solutions that help you ride over business challenges and gain a competitive edge.
                We delve into the vast pool of knowledge to build customized solutions that deliver accelerated change. Our team:
                Performs careful analysis, diagnosis, and optimization to reimagine your IT landscape in order to ensure that it is consistent with the change
                Ideates, incubates, and prototypes novel concepts to raise the bar of business innovation and deliver 'differentiated' growth to you.
              </CardText>
              <CardText>
              Builds innovative strategies and human-centric approaches to supercharge your digital transition
                Simplifies the induction of new IT while extending your legacy, maximizing your IT bottom lines
                Accelerates your digital journey by uncovering new paradigms
                Empowers you with consulting solutions that help you expand, compete, and succeed.
              </CardText>
              <Button variant="warning">Contact us for more details</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default DigitalTrans;
