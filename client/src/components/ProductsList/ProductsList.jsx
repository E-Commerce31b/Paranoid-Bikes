import React, { useState } from 'react';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFiltered, filterProducts } from "../../redux/slices/products";
import { getProducts } from '../../redux/slices/productsActions';
import { addFilter, filtersSelectors } from "../../redux/slices/filters";
import ProductCard from '../ProductCard';

const ProductsList = () => {

    const [price, setPrice] = useState("");
    const [maker, setMaker] = useState("");
    const [gender, setGender] = useState("");
    // const [render, setRender] = useState(false);

    const {category} = useParams()
    const products = useSelector((state) => state.products.products);
    const filtered = useSelector((state) => state.professionals.filtered);
    const pricesAmounts = useSelector ((state) => state.products.pricesAmounts);
    const dispatch = useDispatch();

    const filters = useSelector(filtersSelectors.selectEntities);
    const filtersIds = useSelector(filtersSelectors.selectIds);

    useEffect(() => {dispatch(getProducts())}, [dispatch]);
    
    useEffect(() => {
        products?.length ?
            dispatch(setFiltered(products.filter((item) => item.category === category)))
            : (
                <text>Loading...</text>
            );
        }, [products, category, dispatch]);
        
            
        

    useEffect(() => {
        if (price.length > 0) {
            dispatch(addFilter({ id: 1, price: price }));
        }
        // setRender(true);
    }, [priceAmount, dispatch]);

    useEffect(() => {
        if (maker.length > 0) {
            dispatch(addFilter({ id: 2, maker: maker }));
        }
        // setRender(true);
    }, [maker, dispatch]);

    useEffect(() => {
        if (gender.length > 0) {
            dispatch(addFilter({ id: 3, gender: gender }));
        }
        // setRender(true);
    }, [gender, dispatch]);
    
    useEffect(() => {
        if (filtersIds.length > 0) {
            let arr = [];
            if (filters[1]) arr.push({ price: filters[1]["price"] });
            if (filters[2]) arr.push({ maker: filters[2]["maker"] });
            if (filters[3]) arr.push({ gender: filters[3]["gender"] });
            dispatch(filterProducts(arr));
        }
    }, [filters, dispatch]);

    return (
        <div>
            {
            pricesAmounts.length > 0 ? (
                <select>
                    {pricesAmounts.map((pa, i) => 
                        <option className="option" 
                            value={pa} 
                            key={i}>{pa}</option>
                            )}
                </select>
            ) : (
                <p>Loading...</p>
            )
            }
            {
            maker.length > 0 ? (
                <select>
                    {maker.map((m, i) => 
                        <option className="option" 
                            value={m} 
                            key={i}>{m}</option>
                            )}
                </select>
            ) : (
                <p>Loading...</p>
            )
            }
            {
            filtered ? filtered.map((p,i) => {
                return (<div key={i}>
                    <ProductCard product={p}/></div>)}
            ) : (
                <p>Loading...</p>
            )
            }
        </div>
    )
};

export default ProductsList;