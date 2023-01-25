import React from "react";
import BikesSells from "../../BikesSells.jsx";
import Cards from "../Cards/Cards.jsx";
import Products from "../PanelProducts/Products.jsx";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-3">Dashboard</h1>
      </div>
      <Cards />
      <BikesSells />
      <div className=" pt-6">
        <Products />
      </div>
    </div>
  );
};

export default MainDash;
