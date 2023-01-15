import React from "react";
import { useDispatch } from "react-redux";
import { sortByName, sortByPrice } from "../redux/slices/products";

export default function Sorters() {
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h3 className="p-3 has-text-white">Ordenar por...</h3>
      <div className="select is-success ">
        <select
          id="origins"
          onChange={(e) => dispatch(sortByName(e.target.value))}
        >
          <option defaultValue hidden>
            Nombre
          </option>
          <option value="asc">ascendente</option>
          <option value="desc">descendente</option>
        </select>
      </div>
      <div className="select is-success ml-4">
        <select
          id="weight"
          onChange={(e) => dispatch(sortByPrice(e.target.value))}
        >
          <option defaultValue hidden>
            Precio
          </option>
          <option value="asc">ascendente</option>
          <option value="desc">descendente</option>
        </select>
      </div>
    </div>
  );
}
