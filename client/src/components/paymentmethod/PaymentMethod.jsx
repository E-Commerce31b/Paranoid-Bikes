import React from "react";
import "./paymentmethod.css";
import { imgs } from "../PaymentCard";
import { NavLink } from "react-router-dom";

export default function PaymentMethod() {
  return (
    <div className="flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-space-evenly">
      <div className="container_cards_payment m-6 has-text-centered">
        <div>
          <h1 className="pb-4 is-size-4 "> Metodos de Pago</h1>
        </div>
        <div className="p-5">
          {imgs.map((img) => (
            <button className="button is-white p-6">
              <img src={img} width="130" className="p-5" />
            </button>
          ))}
        </div>
      </div>
      <div className="container_stripe m-6 ">
        <div className="has-text-centered">
          <h1 className="pb-4 is-size-4">Datos de Pago</h1>
        </div>
        <div className="py-4">
          <p className="pb-3">Titular de la tarjeta</p>
          <input className="input is-normal" type="text" />
        </div>
        <div className="py-4">
          <p className="pb-3">Numero de la tarjeta</p>
          <input className="input is-normal" type="text" />
        </div>

        <div className="flex is-flex-direction-row is-justify-content-space-between py-5">
          <div className="">
            <p className="pb-3">Fecha de Vencimiento</p>
            <input className="input is-small" type="text" />
          </div>
          <div>
            <p className="pb-3">CVV</p>
            <input className="input is-small" type="text" />
          </div>
        </div>
        <div className="is-size-4">
          <div className="">
            <p>Total</p>
          </div>
          <div>
            <p>$ 1000</p>
          </div>
        </div>
        <NavLink to="/confirmpurchase">
          <div className="container pt-5 flex is-align-items-flex-center">
            <button className="button is-primary font_family">
              Confirmar datos
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
