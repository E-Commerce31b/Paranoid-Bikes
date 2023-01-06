import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const color = `rgba(255, 255, 255, 1)`;

  return (
    <Link to={`/details/${product.id}`}>
      <div
        style={{
          borderRadius: 5,
          backgroundColor: `${color}`,
          margin: 10,
          height: 260,
          width: 400,
          borderWidth: 2,
          borderColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={product.image}
          alt="Not found"
          style={{ width: "50%", height: "60%" }}
        />
        <div style={{ font: "Audiowide", fontSize: 24, width: "40%" }}>
          {product.name}
        </div>
        <div style={{ font: "Audiowide", fontSize: 20, width: "40%" }}>
          <p>{product.maker}</p>
          <p>$ {product.price}</p>
        </div>
        {/* <div style={{font:"Audiowide", fontSize:20, width:"40%"}}>$ {product.price}</div> */}
      </div>
    </Link>
  );
};

export default ProductCard;

