import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import RenderProducts from "../RenderProducts.jsx";
// import { userStatus, user } from '../../redux/slices/users.js';

import "./cart.css";

const Cart = () => {
  let selected = useSelector((state) => state.users.user.cart);
  const status = useSelector((state) => state.users.status);
  const currentPage = useSelector((state) => state.products.currentPage);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (status === "fullfilled") setLoading(true);
  }, [status]);

  // const currentPage = useSelector((state) => state.products.currentPage);

  const navigate = useNavigate();

  const handlePayment = () => {
    console.log(selected)
    navigate("/stripe", { state: { selected: selected } });
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    if (selected) {
      for (let i = 0; i < selected.length; i++) {
        sum = sum + selected[i].count * selected[i].priceAmount;
        console.log(sum);
      }
    }
    setTotal(sum);
  }, [selected]);

  const slicedProducts = () => {
    // if(product) return product;
    if (selected) {
      setLoading(false);
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return selected;
    }
  };
  if (loading === true) {
    slicedProducts();
  }
  console.log("hola", selected);
  return (
    <div>
      {selected?.length > 0 ? (
        <div className="pt-6">
          <div className="p-6 m-4 flex is-justify-content-center is-flex-direction-row">
            <NavLink to="/">
              <button className="button is-primary is-medium">
                <p className="font_family has-text-white">
                  Agregar más productos
                </p>
              </button>
            </NavLink>
          </div>
          <div>
            <RenderProducts slicedProducts={slicedProducts} />
          </div>

          <div className="cart_container">
            <div className="flex is-flex-direction-row ">
            <NavLink to='/'>
                <p className="font-family">Agregar más productos al carrito</p>
            </NavLink>
              <p className="is-size-3 px-6 has-text-primary">TOTAL A PAGAR =</p>
              <p className="is-size-3 has-text-primary"> {total}</p>
            </div>
            <div>
              <button
                className="button is-primary  is-medium"
                onClick={() => handlePayment()}
              >
                <p className="font-family">Proceder a la compra</p>
              </button>
            </div>
          </div>
        </div>
      ) : status === "loading" ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div>
          <div className="columns is-centered mt-4 mb-4 has-text-white">
            <p>No hay productos seleccionados.</p>
          </div>
          <div className="columns is-centered mb-4 mt-4">
            <NavLink to="/">
              <p className="button is-primary font_family">Agregar productos</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
