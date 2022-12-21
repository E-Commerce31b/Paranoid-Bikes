import React from "react";
import Header from "./reusable/Header";
import ImageDiscounts from "../assets/Imagedescuentos.png";

export default function Landing() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <img className="widthImageLanding" src={ImageDiscounts} />
    </div>
  );
}
