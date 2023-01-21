import React, { useEffect, useState } from "react";
import "./productCard.css";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPurchased } from "../../redux/slices/users";
import Counter from "../Counter";
import Cart from "../Cart";

const ProductCard = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const id = product.id;
  const navigate = useNavigate();
  const params = useLocation();

  const user = useSelector((state) => state.users.user);
  const products = useSelector((state) => state.products.products);

  const sendToCart = (product) => {
    console.log("algoooo", product);

    if (Object.keys(user).length) {
      dispatch(addPurchased({ id, counter, products }));
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
            <Button variant="outlined" onClick={() => sendToCart(product)}>
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
