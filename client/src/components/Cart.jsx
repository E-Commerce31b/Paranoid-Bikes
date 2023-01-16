import React from "react";
import { useSelector } from "react-redux";
import RenderProducts from "./RenderProducts";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

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
  return (
    <div>
      {selected?.length > 0 ? (
        <div>
          <RenderProducts slicedProducts={slicedProducts} />
          <div className="columns is-centered mb-3 mt-2">
            <p
              className="button is-primary font_family"
              onClick={() => handlePayment()}
            >
              Proceder a la compra
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p>No hay productos seleccionados.</p>
          <NavLink to="/">
            <button>Agregar productos</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
