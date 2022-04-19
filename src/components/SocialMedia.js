import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faSkype, faTumblr, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
  const socialIcons = [faFacebookF, faInstagram, faLinkedin, faSkype, faTwitter, faWhatsapp]

  return (
    <>
      <Container fluid className="footer-social">
        <Container>
          <Row>
            <Col lg={6} xl={6}>
              <div className="copyright">
                <p>&copy; Copyright 2022 <b>MFRESK</b>. All Rights Reserved</p>
              </div>
            </Col>
            <Col lg={6} xl={6}>
              <div className="social-media">
                {socialIcons.map((icon) => {
                  return <FontAwesomeIcon icon={icon} />
                  
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default SocialMedia