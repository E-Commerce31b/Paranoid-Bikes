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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduceStock, count } from "../../redux/slices/productsActions.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51MEv4bIJKT77FNwAfDu9uVLRiTpAaVatrh4lOfZHkKKWES4BBbfgJt7LToCRgH75zkbApxJB8tHPeoLq0mkLi5Vx00wG3er93H"
);

const CheckoutForm = ({ selected, token, input}) => {
  //agregar pantalla intermedia "confirmar compra" y que le pase amount

  const user = useSelector((state) => state.users.user);
  console.log(user);
  const [totalPrice, setTotalPrice] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products)
  useEffect(() => {
    let amount = 0;
    for (let product of selected) {
      amount += product.priceAmount;
    }
    setTotalPrice(amount);
  }, [selected]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let promises = [];
    let bikes = [];

    for(let bike of selected) {
      for(let product of products) {
        if(bike._id === product._id) bikes.push(product)
      }
    }
    let amount = 0;
    console.log(selected)
    console.log(bikes)
    for (let product of selected) {
      console.log(selected)
      for (let bike of bikes) {
        console.log(bikes)
        console.log(bike._id)
        if(product._id === bike._id) {
          console.log(product._id);
          console.log(product);
          console.log(bike._id)
          console.log(bike)
          const data = {product, bike}
          promises.push(dispatch(count(data)))
          promises.push(dispatch(reduceStock(product)))
        }
      }
    }
    const responses = await Promise.all(promises);
    console.log("hola");
    console.log(responses);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const {email, country,city, address} = input
      console.log(email)


      const { id } = paymentMethod;
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/api/stripe/checkout`,
        {
          id,
          amount: totalPrice,
          email: email,
          country: country,
          city: city,
          // address: address,
        }
      );
    }
  }

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

// export const validate = (input) => {
//   let errors = {};

//   if (!input.email) {
//     errors.email = "Ingrese email";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
//     errors.email = "Ingrese correo electrónico válido";
//   }

//   if (!input.password) {
//     errors.password = "Ingrese contraseña";
//   } else if (
//     !input.password.match(/[A-Z]/) ||
//     !input.password.match(/[a-z]/) ||
//     !input.password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/) ||
//     !(input.password.length > 7)
//   ) {
//     errors.password =
//       "Contraseña debe tener(Un carácter en mayúscula yu minúscula, un caracter en minúscula más de 8 caracteres, caracteres especiales)";
//   }
//   return errors;
// };

export default function Stripe() {
  const { state } = useLocation();
  const token = useSelector((state) => state.admins.token)
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    // name: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });

  console.log(state)
  const [formErrors, setFormErrors] = useState({
    // name: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    // setFormErrors(validate({ ...input, [property]: value }));
  };

  return (
    <div className="columns is-centered">
      <div className="column is-5 mt-5 has-background-white">
        <div className="font_family">
          <div className="p-4 has-text-centered has-text-black-bis ">
            <h1 className="pb-4 is-size-3">Datos de Pago</h1>
          </div>
          {/* <div>
            <p>Nombre del titular</p>
            <input type="text" name="name" className="input is-normal" />
          </div> */}
          <div className="mt-5">
            <p>Email</p>
            <input type="text" name="email" className="input is-normal" onChange={handleInputChange}/>
          </div>
          <div className="mt-5">
            <p>País</p>
            <input type="text" name="country" className="input is-normal" onChange={handleInputChange}/>
          </div>
          <div className="mt-5">
            <p>Ciudad</p>
            <input type="text" name="city" className="input is-normal" onChange={handleInputChange}/>
          </div>
          <div className="mt-5">
            <p>Dirección</p>
            <input type="text" name="address" className="input is-normal" onChange={handleInputChange}/>
          </div>
          <div className="pt-4  ">
            <Elements stripe={stripePromise}>
              <CheckoutForm token={token} selected={state.selected} input={input} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}
