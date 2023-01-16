import React from "react";
import ProductCard from "./ProductCard/ProductCard.jsx";
import { Button, ButtonGroup} from "@mui/material";

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
        padding: "10px",
        justifyContent: "space-around",
      }}
    >
      {slicedProducts().map((p, i) => {
        return (
          <div key={i}>
            <ProductCard product={p} />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>-</Button>
                <Button>+</Button>
            </ButtonGroup>
            {/* <Button variant="contained">-</Button> */}
            {/* <p>{p.}</p> */}
            {/* <Button variant="contained">+</Button> */}
            <p style={{color:'white'}}>{p.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RenderProducts;
