import React, { useState } from "react";
import "./productCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { putUserCart, removeFromCart } from "../../redux/slices/usersActions.js";
import Counter from "../Counter";

import IconButton from "@mui/material/IconButton";
import iconDelete from "../../assets/iconDelete.png";


const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)
  const navigate = useNavigate();
  const params = useLocation();
  const user = useSelector((state) => state.users.user);

  const sendToCart = (action) => {
    if (Object.keys(user).length) {
      dispatch(putUserCart({ product, user, action: 'increment'}));
      return navigate("/cart");
    } else {
      return navigate("/login");
    }
  };

  return (
    <>
      <div className="box flex is-justify-content-center px-6 boxCard">
      {params?.pathname === "/cart" ? 
          <div className="icon_container">
            <div onClick={() => dispatch(removeFromCart({ product, user }))}>
              <IconButton aria-label="delete" size="small">
                  <img src={iconDelete} alt="iconDelete" width={21} />
              </IconButton>
            </div>
        </div>
            : 
            <></>
          }
        <div className="box-image py-5">
          <img src={product.image} alt="Not found" />
        </div>
        <div className="maker">
          <strong>Marca:</strong> {product.maker}
        </div>
        <div title={product.name}>
          <p className="name-price">
            <strong>Nombre:</strong> {product.name}
          </p>
          <p>
            <strong>Precio:</strong> $ {product.priceAmount}
          </p>
          {params?.pathname === "/cart" ? 
            <p>
              <strong>Subtotal:</strong> $ {product.priceAmount * product.count}
            </p>
            : 
            <></>
          }
        </div>
        {params?.pathname === "/cart" ? (
            <div className="pt-5 flex   ">
            <div className="flex is-flex-direction-row is-justify-content-space-between p-3">
              <Link to={`/details/${product._id}`}>
                <Button variant="outlined">Ver más</Button>
              </Link>
            </div>
          </div>
          ) : (
            <div className="pt-5 flex   ">
              <div className="flex is-flex-direction-row is-justify-content-space-between p-3">
                <Link to={`/details/${product._id}`}>
                  <Button variant="outlined">Ver más</Button>
                </Link>
                <Button variant="outlined" onClick={() => sendToCart()}>
                  🛒
                </Button>
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
      </div>
    </>
  );
};

export default ProductCard;
