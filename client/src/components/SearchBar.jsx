import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getProduct } from '../redux/slices/products';
// import style from '../../assets/styles/SearchBar.module.css';
// import logo from '../../assets/images/lupa.png'
import { useNavigate } from "react-router-dom";

export default function SearchBar () {
    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        dispatch(getProduct(newProduct))
        console.log(/\d+/.test(newProduct))
        if(/\d+/.test(newProduct)) {
            navigate(`/details/${newProduct}`)
        } else {
            navigate(`/list/${newProduct}`)
        }
        setNewProduct("")
    }
    return (
        <div>
            <form 
//uso un mismo estado product para detail y para searchbar (y en el back es dsitinto: una misma función para all y para searchbar)
//puedo filtrar products como un filtro más
//puedo pisar products, y desmontar al volver a clickear en Home / ir a otra sección
//puedo hacer un estado aparte 'someProducts'
//puedo pisar product, y hacer un filtrado aparte
            >
                <p className="control has-icons-left is-expanded">
                <input
                className="input is-small"
                type="text"
                placeholder="Search by name or id..."
                value={newProduct}
                onChange={e => setNewProduct(e.target.value)}/>
            {/* placeholder={props.theText} */ }
                <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
                <button
                    onClick={(e) => handleSubmit(e)} 
                    className="button is-small"
                    alt="not found"
                >
                    🔍
                </button>
            </form>
        </div>
    )
}
