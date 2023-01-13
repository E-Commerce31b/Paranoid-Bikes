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
import { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { reduceStock, count } from '../../redux/slices/productsActions';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(
  "pk_test_51MEv4bIJKT77FNwAfDu9uVLRiTpAaVatrh4lOfZHkKKWES4BBbfgJt7LToCRgH75zkbApxJB8tHPeoLq0mkLi5Vx00wG3er93H"
);

const CheckoutForm = ({ selected }) => {    //agregar pantalla intermedia "confirmar compra" y que le pase amount 
  
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let amount = 0;
    for(let product of selected) {
      console.log(product.price)
      console.log(product)
      console.log(product.priceAmount)
      console.log(amount)
      amount += product.priceAmount
    }
      setTotalPrice(amount)
  }, [selected])

  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let promises = []
    // let amount = 0;
    for(let product of selected) {
      console.log(product)
      promises.push(dispatch(reduceStock(product)))
      promises.push(dispatch(count(product)))
      // amount += product.priceAmount
    }
    const responses = await Promise.all(promises)
    console.log('hola')
    console.log(responses)
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
          amount: totalPrice,
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
        <h3 className="is-size-3 has-text-primary ">$ {totalPrice} usd</h3>
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
  
  const { state } = useLocation();
  console.log(state)

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
          <CheckoutForm selected={state.selected}/>
        </Elements>
      </div>
    </div>
  );
}
