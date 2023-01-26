import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productsActions.js";
import { manageCart } from "../redux/slices/users.js";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "../index.css";
import "./ProductDetail.css";
import { cleanProduct } from "../redux/slices/products.js";
import { putUserCart } from "../redux/slices/usersActions.js";

import Loader from "./Loader";
import Reviews from "./Reviews.jsx";
import { keys } from "@mui/system";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);
  const status = useSelector((state) => state.products.status);

  const user = useSelector((state) => state.users.user);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const data = await dispatch(getProduct(id));
      setBike(data.payload);
      setLoading(false);
    };
    data();
    return () => {
      dispatch(cleanProduct());
    };
  }, [dispatch, id]);

  const sendToCart = () => {
    if (Object.keys(user).length) {
      const product = bike;
      dispatch(putUserCart({ product, user, action: "increment" }));
      return navigate("/cart");
    } else if (!Object.keys(user).length) {
      return navigate("/login");
    }
  };

  return (
    <>
      <Loader loading={status}></Loader>
      <div className="column has-text-centered p-6">
        <h1 className="title is-4 mb-3">Detalles del Producto</h1>
      </div>
      <div className="columns p-6 ">
        <div className="column is-3"></div>
        <div className="column is-6 has-background-white border-radius">
          <div className="columns">
            <div className="column is-6 columna border-radius">
              <figure className="image is-3by2 my-6">
                <img className="img_detail" src={bike.image} alt="not found" />
              </figure>
            </div>
            <div className="column is-6 px5">
              <div className="card-header-title">
                <p className="p_detail">
                  {bike.name} - {bike.maker}
                </p>
              </div>
              <div className="card-content">
                <p className="p_detail">Modelo: {bike.created} </p>
                <p className="p_detail">Fabricante: {bike.maker} </p>
                <p className="p_detail">
                  Genero: {bike.genre ? bike.genre : "Sin Genero"}
                </p>
                <p className="p_detail">
                  Precio: {bike.price} {bike.priceCurrency}
                </p>
                <p className="p_detail">
                  eBike: {bike.type ? "Si es eBike" : "No es eBike"}
                </p>
              </div>
              <Box sx={{ p: 2 }}>
                <NavLink to="/cart">
                  <button
                    className="button is-primary font_family"
                    onClick={() => sendToCart()}
                  >
                    Agregar al carrito
                  </button>
                </NavLink>
              </Box>
              {Object.keys(user).length ? <Reviews /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
