import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productsActions.js";
import { managePurchased } from "../redux/slices/users.js"
import { useParams } from "react-router-dom";
import "../index.css";
const ProductDetail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.users.user)
  const products = useSelector (state => state.products.products)

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const data = await dispatch(getProduct(id));
      setBike(data.payload);
      setLoading(false);
    };
    data();
  }, [dispatch, id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

    const sendToCart = () => {
    if(user) {
      dispatch(managePurchased({id, products}))
      console.log(user)
      // dispatch(putUser(user._id, user))}
      }
    }

  return (
    <>
    <div style={{color:'white',textAlign:'center', fontSize:28, paddingTop:10}}>Detalles del Producto</div>
    <div className="container" style={{background:'white', borderRadius:25, width:800, padding:10,marginBottom:70}}>
    <div className='columns is is-align-items-center'>
      <div className="column is-align-items-center">
            <div className="card-header-title is-align-content-flex-start">
              <p className="card-">{bike.name} - {bike.maker}</p>
          </div>
          <div className="card-content" >
            <p>Modelo: {bike.created} </p>
            <p>Fabricante: {bike.maker} </p>
            <p>Genero: {bike.genre ? bike.genre : "Sin Genero"}</p>
            <p>
              Precio: {bike.price} {bike.priceCurrency}
            </p>
            <p>eBike: {bike.type ? "Si es eBike" : "No es eBike"}</p>
          </div>
        </div>
        <button onClick={() => sendToCart()}>
              Agregar al carrito
        </button>
        <div className="column is is-align-items-center">
        <div style={{ width: "280px", height: "auto"}}>
          <figure>
            <img
              src={bike.image}
              alt="not found"
              />
          </figure>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default ProductDetail;
