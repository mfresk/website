import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import careerImg from "../Images/career.jpg";
import Contact from "./Contact";

const Careers = () => {
  return (
    <>
        <Container className="career-section">
          <Row className="career-row">
            <Col md={5} lg={5} className="career-col-1">
              <div className="career-img">
                <img src={careerImg} alt="" className="img-fluid mt-4" />
              </div>
            </Col>
            <Col md={7} lg={7} className="career-col-2">
              <div className="career-text">
                <h2>Career</h2>
                <p><br />
                If you are passionate about transforming businesses with a positive impact of emerging technologies, you have come to the right place. With clients in every major industry across the globe, we likely have the right opportunity for you. Please share your profile to hello@mfresk.com and we will reach out to you if a suitable match is found.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Contact/>
    </>
  )
}

export default Careers;