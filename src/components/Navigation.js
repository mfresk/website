/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navigation = () => {
  //  const selectAbout = useScrollSection('about');
  //  const selectContact = useScrollSection('contact');
  //  const selectCareer = useScrollSection('career');
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MFRESK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-bar ">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                {/* <a onClick={selectAbout.onClick} selected={selectAbout.selected}>About</a> */}
                <Link to="/about">About</Link>
              </Nav.Link>
              <NavDropdown title="services" id="basic-nav-dropdown">
                <Link to="/technology">Technology Consulting.</Link>
                <Link to="/digital">Ditital Transformation.</Link>
                <Link to="/statergic">Statergic Saurcing.</Link>
                <Link to="/training">Training & Development.</Link>
              </NavDropdown>
              <Nav.Link>
                {/* <a onClick={selectCareer.onClick} selected={selectCareer.selected}>Career</a> */}
                <Link to="/career">Career</Link>
              </Nav.Link>
              <Nav.Link>
                {/* <a onClick={selectContact.onClick} selected={selectAbout.selected}>Contact</a> */}
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
