import React from 'react';
import './productCard.css';

const ProductCard = ({product}) => {
    
    const color = `rgba(255, 255, 255, 1)`

    return (
        
        <div className='box'>
            <div className='box-image'>
            <img src={product.image} alt="Not found" />
            </div>
            <div className='maker'><strong>{product.maker}</strong></div>
            <div className='name-price'>
                <p>{product.name}</p>
                <p>$ {product.price}</p></div>
        </div>
    )
}

export default ProductCard;