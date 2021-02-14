const express = require("express");
const os = require("os");
const CheckbookAPI = require("checkbook-api");
const api = require("./api.json");

const Checkbook = new CheckbookAPI({
  api_key: api.API_KEY,
  api_secret: api.API_SECRET,
  env: "sandbox",
});

const app = express();

app.use(express.static("dist"));

// Send checks after quiz completion
app.get("/api/sendCheck", (req, res) => {
  Checkbook.checks.sendDigitalCheck(
    {
      name: req.query.name,
      recipient: req.query.email,
      description: "You will be an expert in homeowner in no time soon! 🍾",
      amount: 30.0,
    },
    (error, response) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Response:", response);
      }
    }
  );
});

// Request for invoice for donations and consultation tips
app.get("/api/sendInvoice", (req, res) => {
  if (req.query.subscription === "") {
    Checkbook.invoices.sendInvoice(
      {
        name: req.query.name,
        recipient: req.query.email,
        description: "Thank you so much for your interest in helping us! Your donation is super meaningful to us.",
        amount: Number(req.query.amount),
      },
      function (error, response) {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Response:", response);
        }
      }
    );
  } else {
    Checkbook.subscriptions.sendRecurringInvoice(
      {
        name: req.query.name,
        recipient: req.query.email,
        description: `Thank you so much for your interest in helping us! Your ${req.query.subscription.toLowerCase()} reoccuring donation is super meaningful to us.`,
        amount: Number(req.query.amount),
        interval: req.query.subscription,
      },
      function (error, response) {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Response:", response);
        }
      }
    );
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
