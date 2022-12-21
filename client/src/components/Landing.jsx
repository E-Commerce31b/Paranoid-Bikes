import React, { useEffect } from "react";
import Header from "./reusable/Header";
import ImageDiscounts from "../assets/Imagedescuentos.png";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productsActions";
import CategoryCard from "./CategoryCard";

export default function Landing() {
  const categories = useSelector((state) => state.products.categories);
  console.log("categories", categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const color = `#0e0476`;
  return (
    <div className="backgroundbody ">
      <Header />
      <div className="nothing">
        <img src={ImageDiscounts} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <div><MainOffers /></div>  */}
        {categories ? (
          categories.map((c, i) => {
            return (
              <div key={i} className="pl-1">
                <CategoryCard category={c} />
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
