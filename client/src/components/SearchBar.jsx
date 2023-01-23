import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/products.js";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState("");
  const user = useSelector((state) => state.users.user);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProduct(newProduct));
    if (/\d+/.test(newProduct)) {
      navigate(`details/${newProduct}`);
    } else {
      navigate(`/list/${newProduct}`);
    }
    setNewProduct("");
  };
  /*    //uso un mismo estado product para detail y para searchbar (y en el back
        es dsitinto: una misma función para all y para searchbar) //puedo filtrar
        products como un filtro más //puedo pisar products, y desmontar al volver
        a clickear en Home / ir a otra sección //puedo hacer un estado aparte
        'someProducts' //puedo pisar product, y hacer un filtrado aparte */
  const handleCart = () => {
    if (Object.keys(user).length) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };
  return (
    <div class="navbar-item">
      <div className="field is-grouped has-icons-left is-expanded">
        <input
          className="input is-small"
          type="text"
          placeholder="Search by name or id..."
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <div className="flex is-flex-direction-row">
          <div
            className="button is-right is-small"
            onClick={(e) => handleSubmit(e)}
            alt="not found"
          >
            🔍
          </div>
          <div
            className="button is-small is-right"
            onClick={() => handleCart()}
          >
            🛒
          </div>
        </div>
      </div>
    </div>
  );
}
