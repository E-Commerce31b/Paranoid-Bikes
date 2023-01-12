import React from "react";
import Cards from "../Cards/Cards";
import TableProducts from "../TableProducts/TableProducts";
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
