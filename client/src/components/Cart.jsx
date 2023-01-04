import React from 'react'
import { useSelector } from 'react-redux'
import RenderProducts from './RenderProducts'

const Cart = () => {

    const selected = useSelector(state => state.products.selected)

    return (
        <div>
            <RenderProducts slicedProducts={selected} />
        </div>
    )
}

export default Cart