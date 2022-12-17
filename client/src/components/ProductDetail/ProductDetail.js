import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <p>Nombre de la bicicleta: {bike.name}</p>
      <img src={bike.image} alt="Imagen bicicleta" />
      <p>Modelo: {bike.created} </p>
      <p>Fabricante: {bike.maker} </p>
      <p>Genero: {bike.genre ? bike.genre : "Sin Genero"}</p>
      <p>
        Precio: {bike.price} {bike.priceCurrency}
      </p>
      <p>eBike: {bike.type ? "Si es eBike" : "No es eBike"}</p>
    </div>
  );
};

export default ProductDetail;
