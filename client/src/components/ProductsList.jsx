import React, { useState } from 'react';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFiltered, filterProducts, pagination } from "../redux/slices/products";
import { getProducts } from '../redux/slices/productsActions';
import { addFilter, removeFilter, filtersSelectors } from "../redux/slices/filters";
import Header from './reusable/Header';
import Filters from './Filters'
import RenderProducts from './RenderProducts';
import Pagination from './Pagination'

const ProductsList = () => {

    const [price, setPrice] = useState("");
    const [maker, setMaker] = useState("");
    const [gender, setGender] = useState("");

    const {category} = useParams()
    const products = useSelector((state) => state.products.products);
    const filtered = useSelector((state) => state.products.filtered);
    const pricesAmounts = useSelector ((state) => state.products.pricesAmounts);
    const makers = useSelector ((state) => state.products.makers);
    const genders = useSelector ((state) => state.products.genders);
    const currentPage = useSelector(state => state.products.currentPage);
    const dispatch = useDispatch();

    const filters = useSelector(filtersSelectors.selectEntities);
    const filtersIds = useSelector(filtersSelectors.selectIds);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const slicedProducts = () => {
		// if(product) return product;
		if(filtered) {
			// return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
			return filtered.slice(currentPage, currentPage + 16);
		}
	};

    useEffect(() => {
        if (price === "clean") {
            dispatch(removeFilter(1))
        } else if (price.length > 0) {
            dispatch(addFilter({ id: 1, price: price }));
        }
    }, [pricesAmounts, price, dispatch]);

    useEffect(() => {
        if (maker === "clean") {
            dispatch(removeFilter(2))
        } else if (maker.length > 0) {
            dispatch(addFilter({ id: 2, maker: maker }));
        }
        
    }, [maker, dispatch]);

    useEffect(() => {
        if (gender === "clean") {
            dispatch(removeFilter(3))
        } else if (gender.length > 0) {
            dispatch(addFilter({ id: 3, gender: gender }));
        }
    }, [gender, dispatch]);
    
    useEffect(() => {
        products?.length ?
            dispatch(setFiltered(products.filter((item) => item.category === category)))
            : (
                <text>Loading...</text>
            );
        if (filtersIds.length > 0) {
            let arr = [];
            if (filters[1]) arr.push({ price: filters[1]["price"] });
            if (filters[2]) arr.push({ maker: filters[2]["maker"] });
            if (filters[3]) arr.push({ gender: filters[3]["gender"] });
            dispatch(filterProducts(arr));
        }
    }, [products, category, filters, filtersIds, dispatch]);
    
    return (
        <div>
            <div><Header/></div>
            <div><Filters pricesAmounts={pricesAmounts} setPrice={setPrice} makers={makers} setMaker={setMaker} genders={genders} setGender={setGender}/></div>
            <div><RenderProducts slicedProducts={slicedProducts}/></div>
			<div><Pagination currentPage={currentPage} filtered={filtered} pagination={pagination} dispatch={dispatch}/></div>
        </div>
    )
};

export default ProductsList;