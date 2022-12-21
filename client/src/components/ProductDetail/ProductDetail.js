import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/slices/productsActions.js";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(bike);
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
      </div>
    </>
  );
};

export default ProductDetail;
