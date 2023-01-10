import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productsActions.js";
import { managePurchased } from "../redux/slices/users.js"
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.users.user)
  const products = useSelector (state => state.products.products)

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
    if(user) {
      dispatch(managePurchased({id, products}))
      console.log(user)
      // dispatch(putUser(user._id, user))}
      }
    }

  return (
    <>
      <div className="card column is-two-fifths">
        <div className="card-image">
          <figure>
            <img
              src={bike.image}
              style={{ width: "500px", height: "auto" }}
              alt="not found"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="primary title is-4 is-Info">{bike.name}</p>
              <p className="subtitle is-6 is-Info">{bike.maker}</p>
            </div>
          </div>
          <div className="content">
            <p>Modelo: {bike.created} </p>
            <p>Fabricante: {bike.maker} </p>
            <p>Genero: {bike.genre ? bike.genre : "Sin Genero"}</p>
            <p>
              Precio: {bike.price} {bike.priceCurrency}
            </p>
            <p>eBike: {bike.type ? "Si es eBike" : "No es eBike"}</p>
          </div>
        </div>
        <button onClick={() => sendToCart()}>
              Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
