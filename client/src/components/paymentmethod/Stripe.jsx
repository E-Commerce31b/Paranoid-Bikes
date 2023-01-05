import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./paymentmethod.css";

const stripePromise = loadStripe(
  "pk_test_51MEv4bIJKT77FNwAfDu9uVLRiTpAaVatrh4lOfZHkKKWES4BBbfgJt7LToCRgH75zkbApxJB8tHPeoLq0mkLi5Vx00wG3er93H"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post(
        "http://localhost:3001/api/stripe/checkout",
        {
          id,
          amount: 10000,
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-6 is-outlined">
        <CardElement></CardElement>
      </div>
      <div className="is-size-4 py-4">
        <h2>Total</h2>
        <h3 className="is-size-3 has-text-primary ">$ 1000 usd</h3>
      </div>
      <div className="container pt-5">
        <button className="button is-primary btn_stripe flex is-align-items-flex-center">
          Comprar
        </button>
      </div>
    </form>
  );
};

export default function Stripe() {
  return (
    <div className="container_stripe font_family">
      <div className="p-4 has-text-centered has-text-black-bis ">
        <h1 className="pb-4 is-size-3">Datos de Pago</h1>
      </div>
      <div>
        <p>Nombre del titular</p>
        <input type="text" className="input is-normal" />
      </div>
      <div className="pt-4  ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
