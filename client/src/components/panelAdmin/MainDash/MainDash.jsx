import React from "react";
import Cards from "../Cards/Cards.jsx";
import TableProducts from "../TableProducts/TableProducts.jsx";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <TableProducts />
    </div>
  );
};

export default MainDash;
