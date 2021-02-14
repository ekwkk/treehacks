import React, { Component } from "react";
import Menus from "../Menus/Menus";
import QuizTemplate from "react-quiz-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Quiz.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    onCompleteAction: this.onCompleteAction,
    handleFormSubmit: this.handleFormSubmit,
    show: false,
    handleClose: this.handleClose,
    name: "",
    email: "",
    list_of_people: [],
  };

  handleFormSubmit = async (e, name, email) => {
    this.setState({
      list_of_people: list_of_people + [email],
      show: false,
      name: "",
      email: "",
    });
    e.preventDefault();
    await fetch(`/api/sendCheck?name=${name}&email=${email}`);

    return true;
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
    return;
  };

  onCompleteAction = (obj) => {
    if (obj.numberOfCorrectAnswers === obj.numberOfQuestions) {
      this.setState({
        show: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Menus />
        <div className='quiz-container'>
          <QuizTemplate
            quiz={this.props.quiz}
            showInstantFeedback={false}
            shuffle={true}
            onComplete={this.onCompleteAction}
          />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>You got a perfect score! 💯</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Congratulations! 🎉 Woohoo, you just earned yourself some sweet bucks! 💵 Go treat yourself a cup of coffee!{" "}
          </Modal.Body>
          <Form className='form-container'>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Name' onChange={(e) => this.setState({ name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Modal.Footer>
              <Button
                variant='dark'
                type='submit'
                onClick={(e) => this.handleFormSubmit(e, this.state.name, this.state.email)}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
