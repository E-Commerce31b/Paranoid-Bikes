import React from 'react'
import { useSelector } from 'react-redux'
import RenderProducts from './RenderProducts'
import { useDispatch } from 'react-redux'
import { getProduct } from '../redux/slices/productsActions'
import { useNavigate } from 'react-router'

const Cart = () => {

    const selected = useSelector(state => state.users.user.purchased)
    const currentPage = useSelector((state) => state.products.currentPage);
    const products = useSelector((state) => state.products.products)

    const dispatch = useDispatch()

    // const currentPage = useSelector((state) => state.products.currentPage);
  
    const navigate = useNavigate()

    const handlePayment = () => {
      navigate('/stripe', {state: {selected: selected}})
    }

    const slicedProducts = () => {
      // if(product) return product;
      if (selected) {
        // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
        return selected
        // .slice(currentPage, currentPage + 16);
      }
    };
    return (
        <div>
            <RenderProducts slicedProducts={slicedProducts} />
            <button onClick={() => handlePayment()}>Proceder a la compra</button>
        </div>
    )
}

export default Cart