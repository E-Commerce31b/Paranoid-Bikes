import React from "react";
import "./productCard.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { managePurchased } from "../../redux/slices/users";
import Counter from '../Counter'
import { useCounter } from '../CustomHooks/useCounter.jsx'

const ProductCard = ({ product }) => {

  const {decrement, increment, counter } = useCounter()
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const sendToCart = (action) => {
    if (Object.keys(user).length) {
      dispatch(managePurchased({ id, counter, action }));
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
        <Counter increment={increment} decrement={decrement} counter={counter}/>
        <div><button onClick={() => sendToCart('increment')}>Agregar al carrito</button></div>
      </div>
    </>
  );
};

export default ProductCard;
