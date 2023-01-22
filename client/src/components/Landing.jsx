import React from "react";
import ImageDiscounts from "../assets/Imagedescuentos.png";
import CategoryCard from "./CategoryCard.jsx";
import { useSelector } from "react-redux";

export default function Landing() {
  const categories = useSelector((state) => state.products.categories);

  return (
    <div>
      <div className="overlay">
        <img
          className="widthImageLanding"
          src={ImageDiscounts}
          alt="not found"
        />
      </div>
      <h2 className="is-size-3 py-6 has-text-centered has-text-white">
        Categorías
      </h2>
      <div className="flex is-flex-direction-row is-justify-content-space-evenly is-flex-wrap-wrap pb-6">
        {categories?.map((c, i) => {
          return (
            <div key={i}>
              <CategoryCard category={c} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
