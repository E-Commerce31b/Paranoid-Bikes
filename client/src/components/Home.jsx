import React from "react";
// import MainOffers from './MainOffers'
import Header from './reusable/Header'
import ImageDiscounts from "../assets/Imagedescuentos.png";
import CategoryCard from './CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/slices/productsActions'


const Home = () => {
    const categories = useSelector((state) => state.products.categories);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    const color = `rgba(0, 10, 82, 1)`;

    return (
            <div>
                <Header/>
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: `${color}`,
                }}
                >
                {/* <div><MainOffers /></div>  */}
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
    )
}

export default Home;
