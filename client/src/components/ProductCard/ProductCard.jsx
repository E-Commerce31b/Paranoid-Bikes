import React from 'react';
import './productCard.css';
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    return (
        <Link to={`/details/${product.id}`}>
        <div className='box'>
            <div className='box-image'>
            <img src={product.image} alt="Not found" />
            </div>
            <div className='maker'><strong>Marca:</strong> {product.maker}</div>
            <div className='name-price'>
                <p><strong>Nombre:</strong> {product.name}</p>
                <p><strong>Precio:</strong> $ {product.price}</p></div>
        </div>
        </Link>
    )
}

export default ProductCard;