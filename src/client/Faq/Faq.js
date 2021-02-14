import React, { Component } from "react";
import Menus from "../Menus/Menus";

export default class Faq extends Component {
  render() {
    return (
      <div>
        <Menus />
        <div style={{ padding: "5% 12%" }}>
          <h4>What is leverage?</h4>
          <p>It is the use of borrowed funds to buy a house</p>
          <h4>Is Private mortgage insurance (PMI) mandatory to purhcase?</h4>
          <p>Yes, if your down payment is less than 20% of the purchase price</p>
          <h4>What should I do if I don’t have a perfect FICO score? </h4>
          <p>There are plenty of ways to increase your FICO score like paying your payments on time.</p>
          <h4>How much do I need to put down for a down payment?</h4>
          <p>
            Benchmark is 20%, but 10%, 5%, or 0% may be available. The less cash you put, the higher interest rate and
            higher monthly payments there might be, and you may need to provide PMI
          </p>
          <h4>What is APR?</h4>
          <p>APR stands for Annual Percentage Rate, which includes the fees that you are required to pay</p>
        </div>
      </div>
    );
  }
}
