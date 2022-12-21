import React, { useState } from 'react';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFiltered, filterProducts, pagination, render } from "../redux/slices/products";
import { getProducts } from '../redux/slices/productsActions';
import { addFilter, removeFilter, filtersSelectors } from "../redux/slices/filters";
import Header from './reusable/Header'
import ProductCard from './ProductCard';
import Pagination from './Pagination'

const ProductsList = () => {

    const [price, setPrice] = useState("");
    const [maker, setMaker] = useState("");
    const [gender, setGender] = useState("");
    // const [render, setRender] = useState(false);

    const {category} = useParams()
    const products = useSelector((state) => state.products.products);
    const filtered = useSelector((state) => state.products.filtered);
    const pricesAmounts = useSelector ((state) => state.products.pricesAmounts);
    const makers = useSelector ((state) => state.products.makers);
    const genders = useSelector ((state) => state.products.genders);
    const currentPage = useSelector(state => state.products.currentPage);
    const stateRender = useSelector(state => state.products.render);
    const dispatch = useDispatch();

    const filters = useSelector(filtersSelectors.selectEntities);
    const filtersIds = useSelector(filtersSelectors.selectIds);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const slicedProducts = () => {
		// if(product) return product;
		if(filtered) {
            console.log('entramos')
            console.log(filtered)
            console.log(currentPage)
            console.log(filtered.slice(currentPage, (currentPage > 0) ? (currentPage + 16) : 0))
			// return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
			return filtered.slice(currentPage, currentPage + 16);
		}
	};

    if(stateRender) {
		dispatch(render);
		slicedProducts();
	}

    useEffect(() => {
        if (price === "clean") {
            dispatch(removeFilter(1))
            dispatch(render());
        } else if (price.length > 0) {
            dispatch(addFilter({ id: 1, price: price }));
            dispatch(render());
        }
    }, [pricesAmounts, price, dispatch]);

    useEffect(() => {
        if (maker === "clean") {
            dispatch(removeFilter(2))
            dispatch(render());
        } else if (maker.length > 0) {
            dispatch(addFilter({ id: 2, maker: maker }));
            dispatch(render());
        }
        
    }, [maker, dispatch]);

    useEffect(() => {
        if (gender === "clean") {
            dispatch(removeFilter(3))
            dispatch(render());
        } else if (gender.length > 0) {
            dispatch(addFilter({ id: 3, gender: gender }));
            dispatch(render());
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

    // useEffect(() => {
    //     if (render === true) setRender(false);
    // }, [render]);
    
    return (
        <div>
            <Header/>
            {
            pricesAmounts.length > 0 ? (
                <select id="pricesAmounts" onChange={(e) => setPrice(e.target.value)}>
                    <option value="clean" selected>Precio</option>
                    {
                    pricesAmounts.map((pa, i) => 
                        <option 
                            className="option" 
                            value={pa} 
                            key={i}>{pa}</option>
                            )
                    }
                </select>
            ) : (
                <p>Loading...</p>
            )
            }
            {
            makers.length > 0 ? (
                <select id="makers" onChange={(e) => setMaker(e.target.value)}>
                    <option value="clean" selected>Marca</option>
                    {
                    makers.map((m, i) => 
                        <option 
                            className="option" 
                            value={m} 
                            key={i}>{m}</option>
                            )
                    }
                </select>
            ) : (
                <p>Loading...</p>
            )
            }
            {
            genders.length > 0 ? (
                <select id="genders" onChange={(e) => setGender(e.target.value)}>
                    <option value="clean" selected>Género</option>
                    {
                    genders.map((g, i) => 
                        <option 
                            className="option" 
                            value={g} 
                            key={i}>{g}</option>
                            )
                    }
                </select>
            ) : (
                <p>Loading...</p>
            )
            }
            {
            slicedProducts().map((p,i) => {
                return (<div key={i}>
                    <ProductCard product={p}/></div>)})
            }
			<div><Pagination currentPage={currentPage} filtered={filtered} pagination={pagination} dispatch={dispatch}/></div>
        </div>
    )
};

export default ProductsList;