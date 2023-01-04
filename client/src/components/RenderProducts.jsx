import React from 'react'
import ProductCard from './ProductCard'

const RenderProducts = ({slicedProducts}) => {
    
    return (
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", gap:"10px"}}>{
            slicedProducts().map((p,i) => {
                return (<div key={i}>
                    <ProductCard product={p}/></div>)})
            }</div>
    )
}

export default RenderProducts