import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Menus extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ color: "white" }}>
          <LinkContainer to='/' style={{ padding: "1rem" }}>
            <Navbar.Brand>Homie</Navbar.Brand>
          </LinkContainer>

          <Nav className='justify-content-end' style={{ width: "100%" }}>
            <LinkContainer to='/articles' style={{ padding: "1rem" }}>
              <Nav.Link href='#home' style={{ padding: "1rem" }}>
                Articles
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/quiz' style={{ padding: "1rem" }}>
              <Nav.Link>Quiz</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/faq' style={{ padding: "1rem" }}>
              <Nav.Link style={{ padding: "1rem" }}>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/consultation' style={{ borderRadius: "2rem", margin: "6px" }}>
              <Button variant='outline-secondary' onClick={() => window.open("https://meet.google.com/", "_blank")}>
                FREE Consultation
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
