import React from 'react'
import ProductCard from './ProductCard/ProductCard'

const RenderProducts = ({slicedProducts}) => {
    const color = `#000952`;
    return (
        <div style={{background:`${color}`,display: 'flex', flexFlow: 'wrap',padding: 10,
        justifyContent:'space-evenly', gap: '10px'}}>{
            slicedProducts().map((p,i) => {
                return (<div key={i}>
                    <ProductCard product={p}/></div>)})
            }</div>
    )
}

export default RenderProducts;