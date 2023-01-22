import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import RenderProducts from "../RenderProducts.jsx";
import "./cart.css";

const Cart = () => {
  const selected = useSelector((state) => state.users.user.purchased);
  const currentPage = useSelector((state) => state.products.currentPage);
  const user = useSelector((state) => state.users.user);

  // const currentPage = useSelector((state) => state.products.currentPage);

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/stripe", { state: { selected: selected } });
  };

  const slicedProducts = () => {
    // if(product) return product;
    if (selected) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return selected;
    }
  };
  console.log("hola", selected);
  return (
    <div>
      {selected?.length > 0 ? (
        <div className="pt-6">
          <RenderProducts slicedProducts={slicedProducts} />
          <div className="cart_container">
            <div className="flex is-flex-direction-row ">
              <p className="is-size-3 px-6 has-text-primary">TOTAL A PAGAR =</p>
              <p className="is-size-3 has-text-primary"> {selected[0].price}</p>
            </div>
            <div>
              <button
                className="button is-primary  is-medium"
                onClick={() => handlePayment()}
              >
                <p className="font-family">Proceder a la compra</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="columns is-centered mt-4 mb-4 has-text-white">
            <p>No hay productos seleccionados.</p>
          </div>
          <div className="columns is-centered mb-4 mt-4">
            <NavLink to="/">
              <p className="button is-primary font_family">Agregar productos</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
