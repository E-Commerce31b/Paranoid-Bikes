import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const RenderProducts = ({ slicedProducts }) => {
  const color = `#000952`;
  return (
    <div
      style={{
        background: `${color}`,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
        padding:'10px',
        justifyContent: 'space-around'
      }}
    >
      {slicedProducts().map((p, i) => {
        return (
          <div key={i}>
            <ProductCard product={p} />
          </div>
        );
      })}
    </div>
  );
};

export default RenderProducts;
