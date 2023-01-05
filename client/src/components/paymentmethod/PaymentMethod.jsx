import React from "react";
import Stripe from "./Stripe";

export default function PaymentMethod() {
  return (
    <div className="flex is-justify-content-space-evenly is-flex-direction-row">
      <div className="container_cards_payment"></div>
      <div className="p-6">
        <Stripe />
      </div>
    </div>
  );
}
