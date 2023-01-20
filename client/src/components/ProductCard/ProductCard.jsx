import React, { useEffect, useState } from "react";
import "./productCard.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPurchased, incrementPurchased, decrementPurchased } from "../../redux/slices/users";
import Counter from '../Counter'

const ProductCard = ({ product }) => {

    const [counter, setCounter] = useState(1)

  let { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const user = useSelector((state) => state.users.user);
  const products = useSelector((state) => state.products.products);

  const sendToCart = () => {
    if (Object.keys(user).length) {
      dispatch(addPurchased({ id, counter, products }));
      return navigate('/cart');
    } else {
      return navigate('/login')
    }
  };

  return (
    <>
      <div className="box cardBike">
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
        <ButtonGroup className="botones">
          <Link to={`/details/${product.id}`}>
            <p className="button is-primary font_family">Ver más</p>
          </Link>
          {/* <Button onClick={() => sendToCart()}>
            <h1 fontSize="30">🛒</h1>
          </Button> */}
        </ButtonGroup>
        <Counter counter={counter} setCounter={setCounter} stock={product.stock}/>
        <div><button onClick={() => sendToCart()}>Agregar al carrito</button></div>
      </div>
    </>
  );
};

export default ProductCard;
