import React from "react";
import ProductCard from "./ProductCard/ProductCard.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { cleanProduct } from "../redux/slices/products.js";
import { removeAll } from "../redux/slices/filters.js";
import { cleanCurrentPage } from "../redux/slices/products.js";

const RenderProducts = ({ slicedProducts }) => {
  const someProducts = useSelector((state) => state.products.someProducts);
  const filters = useSelector((state) => state.products.filtered);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.length > 0) {
      console.log("entramos");
      dispatch(cleanCurrentPage());
    }
    return () => dispatch(removeAll());
  }, [dispatch, filters]);

  const color = `#000952`;

  return (
    <div
      style={{
        background: `${color}`,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "40px",
        padding: "60px",
        justifyContent: "space-around",
      }}
    >
      {slicedProducts().map((p, i) => {
        return (
          <div key={i}>
            <ProductCard product={p} />
          </div>
        );
      })}
      {someProducts ? (
        <button onClick={() => navigate(-1)}>Regresar</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RenderProducts;
