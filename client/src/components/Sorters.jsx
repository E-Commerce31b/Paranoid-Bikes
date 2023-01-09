import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByName, sortByPrice } from '../redux/slices/products'

export default function Sorters () {

    const dispatch = useDispatch();

    return (
            <div >
                <h3 >Ordenar por...</h3>
                    <select  id="origins" onChange={(e) => dispatch(sortByName(e.target.value))}>
                        <option defaultValue hidden>Nombre</option>   
                        <option value="asc">ascendente</option>
                        <option value="desc">descendente</option>
                    </select>
                    <select  id="weight" onChange={(e) => dispatch(sortByPrice(e.target.value))}>
                        <option defaultValue hidden>Precio</option>
                        <option value="asc">ascendente</option>
                        <option value="desc">descendente</option>
                    </select>
            </div>
    )
}