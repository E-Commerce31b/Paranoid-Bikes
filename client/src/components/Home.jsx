import React from 'react'
import MainOffers from './MainOffers'
import ProductCard from './ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from '../redux/slices/productsActions'
const Home = () => {

    const categories = useSelector((state) => state.products.categories)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(getCategories())})
    return (
        <div>
            <div><MainOffers /></div>
            {categories ? categories.map((c,i) => {return (<div key={i}><ProductCard category={c}/></div>)}) : <div>Loading...</div>}
        </div>
    )
}

export default Home