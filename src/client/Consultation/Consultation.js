import React, { Component } from "react";
import Menus from "../Menus/Menus";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Consultation extends Component {
  state = { handleFormSubmit: this.handleFormSubmit, name: "", email: "", amount: 5, subscription: "" };

  handleFormSubmit = async (e, name, email, amount, subscription) => {
    console.log(name, email, amount, subscription);
    this.setState({
      name: "",
      email: "",
      amount: 0,
      subscription: "",
    });
    e.preventDefault();
    await fetch(`/api/sendInvoice?name=${name}&email=${email}&amount=${amount}&subscription=${subscription}`);
    return true;
  };

  render() {
    return (
      <div>
        <Menus />

        <Form className='form-container'>
          <h3> Enjoyed your coffee chat with your consultant? ☕️ </h3>{" "}
          <h3>Please consider donating to support more people!</h3>
          <Form.Group controlId='formBasicText'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicNumber'>
            <Form.Label>Donation amount</Form.Label>
            <Form.Control
              type='number'
              placeholder='Donation amount'
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId='formBasicSelect'>
            <Form.Label>Recurring donation?</Form.Label>
            <Form.Control
              as='select'
              className='mr-sm-2'
              onChange={(e) => this.setState({ subscription: e.target.value })}
              id='inlineFormCustomSelect'
              custom
            >
              <option value='0'>I'm good for now</option>
              <option value='WEEKLY'>Weekly</option>
              <option value='MONTHLY'>Monthly</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant='dark'
            type='submit'
            onClick={(e) =>
              this.handleFormSubmit(e, this.state.name, this.state.email, this.state.amount, this.state.subscription)
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
