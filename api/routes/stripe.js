require("dotenv").config();
const express = require("express");
const router = express();
const Stripe = require("stripe");

const { API_STRIPE } = process.env;

const stripe = new Stripe(API_STRIPE);

router.post("/checkout", async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Bicicle",
      payment_method: id,
      confirm: true,
    });

    res.send({ message: "Pago exitoso" });
    console.log(id)
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
