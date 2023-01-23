import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productsActions.js";
import { manageCart } from "../redux/slices/users.js";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "../index.css";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(1);

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);

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
  }, [dispatch, id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const sendToCart = () => {
    if (Object.keys(user).length) {
      dispatch(manageCart({ id, counter, action: 'increment' }));
      return navigate('/cart');
    } else {
      return navigate('/login')
    }
  };

  return (
    <>
      <div className="column has-text-centered">
        <h1 className="title is-4 mb-3">Detalles del Producto</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6 has-background-white">
          <div className="columns">
            <div className="column is-6 columna">
              <figure className="image is-3by2 mt-6">
                <img src={bike.image} alt="not found" />
              </figure>
            </div>
            <div className="column is-6">
              <div className="card-header-title">
                <p>
                  {bike.name} - {bike.maker}
                </p>
              </div>
              <div className="card-content">
                <p>Modelo: {bike.created} </p>
                <p>Fabricante: {bike.maker} </p>
                <p>Genero: {bike.genre ? bike.genre : "Sin Genero"}</p>
                <p>
                  Precio: {bike.price} {bike.priceCurrency}
                </p>
                <p>eBike: {bike.type ? "Si es eBike" : "No es eBike"}</p>
              </div>
              <Box sx={{ p: 2 }}>
                {/* <NavLink to="/cart"> */}
                <p
                  className="button is-primary font_family"
                  onClick={() => sendToCart()}
                >
                  Agregar al carrito
                </p>
                {/* </NavLink> */}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
