import React, { useEffect } from "react";
import Header from "./reusable/Header";
import ImageDiscounts from "../assets/Imagedescuentos.png";
import CategoryCard from './CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/slices/productsActions'

export default function Landing() {

    const categories = useSelector((state) => state.products.categories);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


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
                {categories ? (
                    categories.map((c, i) => {
                    return (
                        <div key={i}>
                        <CategoryCard category={c} />
                        </div>
                    );
                    })
                ) : (
                    <div>Loading...</div>
                )}
                </div>
      </div>
    </div>
  );
}
