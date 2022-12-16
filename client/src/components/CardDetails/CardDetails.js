import React from "react";
import { useSelector } from "react-redux";

const CardDetails = () => {
  let bikes = useSelector((store) => store.products);
  console.log(bikes);
  return (
    <div>
      <p>Nombre de la bicicleta: </p>
      <img src="" alt="Imagen bicicleta" />
      <p>Modelo: </p>
      <p>Año: </p>
      <p>Nuevo/ Usado</p>
      <p>Fabricante: </p>
      <p>Genero: </p>
      <p>Categoria: </p>
      <p>eBike: </p>
      <p>Precio: </p>
    </div>
  );
};

export default CardDetails;
