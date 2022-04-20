import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import serviceImage from "../Images/services.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../Images/about-img.jpg";
import careerImg from "../Images/career.jpg";
import { faEnvelope, faMapMarkerAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
// import { Section } from "react-scroll-section";

const Home = () => {

  return (   
    <>
      <div className="home-main">
        <div className="container-fluid home">
          <div className="row">
            <div className="col-12">
              <div className="home-banner-box">
                <h1 className="brand-name">MFRESK Technologies</h1>
                <p className="brand-subtitle">
                  ISO Audits, BCMS, RISK & SEO Marketing
                </p>
                <h2 className="tagline">Go beyond, Go digital</h2>
                <p className="desc">
                  "We provide a quality driven approach towards web, software,
                  mobile app application development."
                </p>
                <button type="button" className="btn banner-btn">
                  Let's Work Together <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>

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

        <Container className="career-section">
          <Row>
            <Col md={5} lg={5}>
              <div className="career-img">
                <img src={careerImg} alt="" className="img-fluid mt-4" />
              </div>
            </Col>
            <Col md={7} lg={7}>
              <div className="career-text">
                <h2>Career</h2>
                <p><br/>
                If you are passionate about transforming businesses with a positive impact of emerging technologies, you have come to the right place. With clients in every major industry across the globe, we likely have the right opportunity for you. Please share your profile to hello@mfresk.com and we will reach out to you if a suitable match is found.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="service-section">
          <div className="row">
            <div className="col-12 mt-4 mb-4">
              <h2>Our Services</h2>
            </div>
          </div>
          <Row>
            <Col md={6} lg={6}>
              <img src={serviceImage} alt="" className="img-fluid mt-4" />
            </Col>
            <Col md={6} lg={6}>
              <Link to="/technology" className="inner-services"><h3>Technology Consulting</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius? Cumque exercitationem, aspernatur
                voluptatum sapiente veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius?</p>
              <Link to="/digital" className="inner-services"><h3>Digital Transformation</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius? Cumque exercitationem, aspernatur
                voluptatum sapiente veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius?</p>
              <Link to="/statergic" className="inner-services"><h3>Statergic Sourcing</h3></Link>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius? Cumque exercitationem, aspernatur
                voluptatum sapiente veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius?</p>
              <Link to="/traning" className="inner-services"><h3>Training & Development</h3> </Link> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius? Cumque exercitationem, aspernatur
                voluptatum sapiente veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sequi laborum nemo eius?</p>
            </Col>  
          </Row>  
        </Container>
      </div>
      <footer className="container">
      <h2 className="title">Contact</h2>
      <div className="row footer-head-box">
        <div className="col-md-6 col-lg-6">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="footer-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h3 className="add-heading">our address</h3>
                <p className="address">
                  Adress: 104, 29th Main, 3rd Cross HSR Layout, Sector 1,
                  Bangalore, India 560102
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="footer-box">
                <FontAwesomeIcon icon={faEnvelope} />
                <h3 className="add-heading">email us</h3>
                <a href="mailto:loremipsum@test.com" className="email">loremipsum@test.com</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="footer-box">
                <FontAwesomeIcon icon={faPhoneVolume} />
                <h3 className="add-heading">call us</h3>
                  <a href="tel:1234567890" className="call">1234567890</a>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="footer-form">
            <form>
              <div className="mb-3">
                <div className="name-email">
                  <input type="text" name="name" placeholder="Name*" className="form-control" />
                  <input type="email" name="email" placeholder="Email*" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <input type="number" name="name" placeholder="Contact Number*" className="form-control name" />
              </div>
              <div className="mb-3">
                <input type="text" name="name" placeholder="Website Link" className="form-control" />
              </div>
              <div className="mb-3">
                <textarea name="" id="" cols="20" rows="6" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="mb-3">
                <input type="submit" name="submit" value="Send Message" className="btn btn-danger" />
              </div>
            </form>
          </div>
        </div>
      </div>      
    </footer>
    </>
  );
};

export default Home;
