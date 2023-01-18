import React, { useEffect, useState } from "react";
import "./productCard.css";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slices/productsActions";
import { managePurchased } from "../../redux/slices/users";

const ProductCard = ({ product }) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.users.user);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      //const data = await dispatch(getProduct(id));
      setBike(data.payload);
      setLoading(false);
    };
    data();
  }, [dispatch, id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const sendToCart = () => {
    if (user) {
      dispatch(managePurchased({ id, products }));
      console.log(user);
      // dispatch(putUser(user._id, user))}
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
      </div>
    </>
  );
};

export default ProductCard;
