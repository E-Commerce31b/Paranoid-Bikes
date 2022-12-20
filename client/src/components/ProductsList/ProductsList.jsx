import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/productsActions';
import { addFilter, filtersSelectors } from "../../slices/filters";
import ProductCard from '../ProductCard';

const ProductsList = () => {

    const [price, setPrice] = useState("");
    const [maker, setMaker] = useState("");
    const [gender, setGender] = useState("");
    // const [render, setRender] = useState(false);

    const {category} = match.params
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const filters = useSelector(filtersSelectors.selectEntities);
    const filtersIds = useSelector(filtersSelectors.selectIds);

    useEffect(() => {dispatch(getProducts())}, [dispatch]);
    
    let filtered = [];
    
    useEffect(() => {
        if(products) {
            filtered = products.filter((item) => item.category === category)
        };
    });

    useEffect(() => {
        if (priceAmount.length > 0) {
            let price = specialties.filter((s) => s.name === speciality)[0];
            dispatch(addFilter({ id: 1, price: price }));
        }
        // setRender(true);
    }, [priceAmount]);

    useEffect(() => {
        if (maker.length > 0) {
            dispatch(addFilter({ id: 2, maker: maker }));
        }
        // setRender(true);
    }, [maker]);

    useEffect(() => {
        if (gender.length > 0) {
            dispatch(addFilter({ id: 3, gender: gender }));
        }
        // setRender(true);
    }, [gender]);
    
    useEffect(() => {
        if (filtersIds.length > 0) {
            let arr = [];
            if (filters[1]) arr.push({ price: filters[1]["price"] });
            if (filters[2]) arr.push({ maker: filters[2]["maker"] });
            if (filters[3]) arr.push({ gender: filters[3]["gender"] });
            dispatch(filterProducts(arr));
        }
    }, [filters]);

    return (
        <div>
            {
            filtered ? filtered.map((p,i) => {
                return (<div key={i}><ProductCard product={p}/></div>)}) :
                <div>Loading...</div>
            }
        </div>
    )
};

export default ProductsList;