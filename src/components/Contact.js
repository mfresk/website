import { faEnvelope, faMapMarkerAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
// import { Section } from "react-scroll-section";

function Contact() {
  
  return (
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
  );
}

export default Contact;
