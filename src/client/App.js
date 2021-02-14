import React, { Component } from "react";
import "./app.css";
import House from "./images/house.png";
import Flowchart from "./images/flowchart.png";
import Menus from "./Menus/Menus";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class App extends Component {
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
        <div className='background'>
          <div className='textLeft'>
            <h2 className='textTitle'>Everyone Can Own A Home</h2>
            <p className='textDescription'>
              Learn about the ways to make yourself a home owner. Take interactive quizzes to earn money for your
              knowledge. Get free consultations with our experts on homeownership and increase your chance to get a
              mortgage approval.
            </p>
          </div>
          <img src={House} alt='house' className='house' />
        </div>
        <br />
        <div className='flowchart'>
          <img src={Flowchart} alt='flowchart' style={{ width: "100%", paddingLeft: "5%" }} />
        </div>
        <Navbar bg='light' variant='light'>
          <Container>
            🌸 🌸 Please consider donating to us by filling out your email in the donation form on the right! ➡️ <br />{" "}
            <Form className='form-container'>
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
                  this.handleFormSubmit(
                    e,
                    this.state.name,
                    this.state.email,
                    this.state.amount,
                    this.state.subscription
                  )
                }
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Navbar>
      </div>
    );
  }
}
