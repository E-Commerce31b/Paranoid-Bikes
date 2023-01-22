import React, { useEffect, useState } from "react";
import "./productCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPurchased } from "../../redux/slices/users";
import Counter from "../Counter";
import IconButton from "@mui/material/IconButton";
import iconDelete from "../../assets/iconDelete.png";

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
      <div className="box flex is-justify-content-center px-6 boxCard">
        <div className="icon_container">
          <IconButton aria-label="delete" size="small">
            <img src={iconDelete} alt="iconDelete" width={21} />
          </IconButton>
        </div>
        <div className="box-image py-5">
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
          <div className="flex is-flex-direction-row is-justify-content-space-between p-3">
            <Link to={`/details/${product.id}`}>
              <Button variant="outlined">Ver más</Button>
            </Link>
            <Button variant="outlined" onClick={() => sendToCart(product)}>
              🛒
            </Button>
          </div>
        </div>
        <div className="flex is-justify-content-space-around is-flex-direction-row py-5">
          {params?.pathname === "/cart" ? (
            <Counter
              counter={counter}
              setCounter={setCounter}
              stock={product.stock}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
