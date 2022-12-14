const Stripe = require("stripe")
const sendMail = require("./nodemon")
const { bikeModel } = require("../models");



const useStripe = async (req, res) => {
    const { email} = req.body
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 50,
        currency: "usd",
        payment_method_types: ["card"]
      })
   
      const clientSecret = paymentIntent.client_secret
      res.json({ message: "Tu pago ha sido acreditado", clientSecret, "email" : email})
         
      sendMail.sendMail(email)
   
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal server error" })
    }
   }