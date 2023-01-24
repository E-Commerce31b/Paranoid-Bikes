import React, { useState } from "react";
import "./productCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  putUserCart,
  removeFromCart,
} from "../../redux/slices/usersActions.js";
import Counter from "../Counter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconButton from "@mui/material/IconButton";
import iconDelete from "../../assets/iconDelete.png";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const params = useLocation();
  const user = useSelector((state) => state.users.user);

  const notifySuccess = () => {
    toast.success("¡Agregado al carrito!", {
      position: toast.POSITION.TOP_CENTER,
      // className: 'foo-bar'
    });
  }
  const notifyError = () => {
    toast.error("¡No hay stock del producto!", {
      position: toast.POSITION.TOP_CENTER,
      // className: 'foo-bar'
    });
  }

  const sendToCart = () => {
      // agregar stock > count (traer estado de cart)
    if (Object.keys(user).length && product.stock > 0) {
      dispatch(putUserCart({ product, user, action: 'increment'}));
      notifySuccess()
      // return navigate("/cart");
    } else if(!Object.keys(user).length) {
      return navigate("/login");
    } else if (product.stock === 0) {
      notifyError()
    }
  };

  return (
    <>
      <div className="box flex is-justify-content-center px-6 boxCard">
        {params?.pathname === "/cart" ? (
          <div className="icon_container">
            <div onClick={() => dispatch(removeFromCart({ product, user }))}>
              <IconButton aria-label="delete" size="small">

                <img
                  className="imagen"
                  src={iconDelete}
                  alt="iconDelete"
                  width={21}
                />
              </IconButton>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="box-image py-5 contenedor">
          <img className="imagen" src={product.image} alt="Not found" />
        </div>
        <div className="maker">
          <strong className="p_detail">Marca:</strong> {product.maker}
        </div>
        <div title={product.name}>
          <p className="name-price">
            <strong className="p_detail">Nombre:</strong> {product.name}
          </p>
          <p>
            <strong className="p_detail">Precio:</strong> ${" "}
            {product.priceAmount}
          </p>
          {params?.pathname === "/cart" ? (
            <p>
              <strong>Subtotal:</strong> $ {product.priceAmount * product.count}
            </p>
          ) : (
            <></>
          )}
        </div>
        {params?.pathname === "/cart" ? (
          <div className="pt-5 flex   ">
            <div className="flex is-flex-direction-row is-justify-content-space-between p-3">
              <Link to={`/details/${product.id}`}>
                <Button variant="outlined">Ver más</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="pt-5 flex   ">
            <div className="flex is-flex-direction-row is-justify-content-space-between p-3">
              <Link to={`/details/${product.id}`}>
                <Button variant="outlined">Ver más</Button>
              </Link>
              <Button variant="outlined" onClick={() => sendToCart()}>
                🛒
              </Button>
              <ToastContainer autoClose={1500}/>
            </div>
          </div>
        )}
        <div className="flex is-justify-content-space-around is-flex-direction-row py-5">
          {params?.pathname === "/cart" ? (
            <Counter
              count={product.count}
              product={product}
              putUserCart={putUserCart}
              user={user}
            />
          ) : (
            <></>
          )}
        </div>
        <div>
          { product.stock === 0 ?
          <p>Sin stock</p>
            :
          <p>Hay stock</p>
          }
        </div>

      </div>
    </>
  );
};

export default ProductCard;
