import React, { useState } from "react";
import "./productCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { manageCart } from "../../redux/slices/users";
import Counter from "../Counter";

const ProductCard = ({ product }) => {

  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const id = product.id;
  const navigate = useNavigate();
  const params = useLocation();

  const user = useSelector((state) => state.users.user);

  const sendToCart = () => {
    if (Object.keys(user).length) {
      dispatch(manageCart({ id, counter, action: 'increment'}));
      return navigate("/cart");
    } else {
      return navigate("/login");
    }
  };

  return (
    <>
      <div className="box  flex is-justify-content-center">
        <div className="box-image">
          <img src={product.image} alt="Not found" />
        </div>
        <div className="maker">
          <strong>Marca:</strong> {product.maker}
        </div>
        <div title={product.name}>
          <p className="name-price">
            <strong>Nombre:</strong> {product.name}
          </p>
          <p>
            <strong>Precio:</strong> $ {product.price}
          </p>
        </div>
        <div className="pt-5 flex   ">
          <div className="flex is-flex-direction-row is-justify-content-space-evenly p-3">
            <Link to={`/details/${product.id}`}>
              <Button variant="outlined">Ver más</Button>
            </Link>
            <Button variant="outlined" onClick={() => sendToCart()}>
              🛒
            </Button>
          </div>
          <div>{params?.pathname === "/cart" ? <Counter /> : <></>}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
