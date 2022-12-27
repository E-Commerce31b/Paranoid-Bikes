import React from "react";
import Header from "./reusable/Header";
import ImageDiscounts from "../assets/Imagedescuentos.png";
import CategoryCard from './CategoryCard'
import { useSelector } from 'react-redux'

export default function Landing() {

    const categories = useSelector((state) => state.products.categories);

    const color = `#0e0476`;

  return (
    <div>
      <div className="backgroundbody">
        <Header />
      <img className="widthImageLanding" src={ImageDiscounts} alt='not found' />
        <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: `${color}`,
                }}
                >
                {categories?.map((c, i) => {
                return (
                    <div key={i}>
                    <CategoryCard category={c} />
                    </div>)
                  })}
        </div>
      </div>
    </div>
  );
}
