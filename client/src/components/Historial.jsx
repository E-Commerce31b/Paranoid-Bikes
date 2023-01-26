import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RenderProducts from './RenderProducts';

const Historial = () => {

    const [loading, setLoading] = useState(false)
    const selected = useSelector((state) => state.users.user.history)

    const slicedProducts = () => {
            // if(product) return product;
    if (selected) {
        setLoading(false);
        // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
        return selected;
        }
    };

    useEffect(() => {
        if(loading) {
            setLoading(false)
        }
    }, [loading])

    return (
        <>
        {
        selected?.length  ? 
        <div><RenderProducts slicedProducts={slicedProducts}/></div>
        :
        <div>El usuario no ha visitado ningún producto</div>
        }
        </>
    )
}

export default Historial