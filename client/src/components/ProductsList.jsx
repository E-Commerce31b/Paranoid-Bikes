import React from 'react';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { pagination } from "../redux/slices/products";
import { getProducts } from '../redux/slices/productsActions';
import Header from './reusable/Header';
import Filters from './Filters'
import RenderProducts from './RenderProducts';
import Pagination from './Pagination'

const ProductsList = () => {

    const {category} = useParams()
    const filtered = useSelector((state) => state.products.filtered);
    const currentPage = useSelector(state => state.products.currentPage);
    const dispatch = useDispatch();

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
    
    return (
        <div>
            <div><Header/></div>
            <div><Filters category={category}/></div>
            <div><RenderProducts slicedProducts={slicedProducts}/></div>
			<div><Pagination currentPage={currentPage} filtered={filtered} pagination={pagination}/></div>
        </div>
    )
};

export default ProductsList;