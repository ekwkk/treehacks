import React, { Component } from "react";
import Menus from "../Menus/Menus";
import quiz1 from "../quizzes/quiz1.json";
import quiz2 from "../quizzes/quiz2.json";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import "./QuizDashboard.css";

export default class Quiz extends Component {
  render() {
    return (
      <div>
        <Menus />
        <div className='cards'>
          {}
          <Card style={{ width: "18rem", margin: "2%" }}>
            <Card.Body>
              <Card.Title>Basics of Home Ownership</Card.Title>
              <Card.Text>Quiz to test your knowledge on homeownership.</Card.Text>
              <LinkContainer to='/quiz2'>
                <Card.Link>Attempt quiz</Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "2%" }}>
            <Card.Body>
              <Card.Title>Sample Test</Card.Title>
              <Card.Text>Sample Test.</Card.Text>
              <LinkContainer to='/quiz1'>
                <Card.Link>Attempt quiz</Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "2%" }}>
            <Card.Body>
              <Card.Title>Sample Test</Card.Title>
              <Card.Text>Sample Test.</Card.Text>
              <LinkContainer to='/quiz1'>
                <Card.Link>Attempt quiz</Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
