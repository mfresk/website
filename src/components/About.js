import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../Images/about-img.jpg";

const About = () => {
  return (
    <>
      <Container className="about-section" id="about">
          <Row>
            <Col md={7} lg={7}>
              <div className="about-text">
                <h2>About</h2>
                <p>
                We are young, energetic,  innovative and best-in-class digital transformation services provider. <br/>
                We enable organizations adopt digital processes and customer engagement models to achieve outstanding results and end-user experience. We help clients achieve this through enterprise-wide digital transformation, modernization, and optimization of their IT environment. <br/>
                We offer end to end consulting services, design, development and managed services across Infrastructure, Cloud, Mobility, BI, Analytics, Product Engineering, QA & Testing, IoT, Big Data, and Artificial Intelligence.
                </p>
              </div>
            </Col>
            <Col md={5} lg={5}>
              <div className="about-img mt-4">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default About;