import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFilter, removeFilter, filtersSelectors } from "../redux/slices/filters";
import { filterProducts } from "../redux/slices/products";

const Filters = () => {

    // const [price, setPrice] = useState("");
    const [maker, setMaker] = useState("");
    const [gender, setGender] = useState("");

    const pricesAmounts = useSelector ((state) => state.products.pricesAmounts);
    const makers = useSelector ((state) => state.products.makers);
    const genders = useSelector ((state) => state.products.genders);
    const dispatch = useDispatch();

    const filters = useSelector(filtersSelectors.selectEntities);
    const filtersIds = useSelector(filtersSelectors.selectIds);

    // useEffect(() => {
    //     if (price === "clean") {
    //         dispatch(removeFilter(1))
    //     } else if (price.length > 0) {
    //         dispatch(addFilter({ id: 1, price: price }));
    //     }
    // }, [pricesAmounts, price, dispatch]);

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
        if (filtersIds.length > 0) {
            let arr = [];
            if (filters[1]) arr.push({ price: filters[1]["price"] });
            if (filters[2]) arr.push({ maker: filters[2]["maker"] });
            if (filters[3]) arr.push({ gender: filters[3]["gender"] });
            dispatch(filterProducts(arr));
        }
    }, [filters, filtersIds, dispatch]);

    return (
        <div>
            {/* {
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
            ) */}
            {/* } */}
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
            }</div>
    )
}

export default Filters