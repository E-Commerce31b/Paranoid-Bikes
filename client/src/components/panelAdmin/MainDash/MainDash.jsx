import React from "react";
import Cards from "../Cards/Cards.jsx";
import TableProducts from "../TableProducts/TableProducts.jsx";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-3">Dashboard</h1>
      </div>
      <Cards />
      <TableProducts />
    </div>
  );
};

export default MainDash;
