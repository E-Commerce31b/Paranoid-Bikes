import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./pagination/Pagination.jsx";
import RenderProducts from "./RenderProducts.jsx";
import useNearScreen from '../CustomHooks/useNearScreen.jsx';

function BestSellers() {
  const counter = useSelector((state) => state.products.products);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    function bestSellers() {
      console.log(counter);
      let arr = [];
      let arrReverse = [];

      for (let i = 0; i < counter.length; i++) {
        if (counter[i].count > 0) {
          arr.push(counter[i]);
        }
      }

      const arrSorted = arr.sort((a, b) => a.count - b.count);
      console.log(arrSorted);

      for (let i = arrSorted.length - 1; i > arrSorted.length - 6; i--) {
        arrReverse.push(arrSorted[i]);
      }
      console.log(arrReverse);
      return arrReverse;
    }
    const data = bestSellers();
    console.log(data);
    setBikes(data);
  }, []);
  return (
    <div className="mb-5 mt-5">
      <div className="column has-text-centered has-text-white">
        <h1 className="title is-3 font_family m-5">
          Las Bicicletas Mas Queridas Por Nuestros Clientes
        </h1>
      </div>

      <div className="is-flex is-justify-content-center">
        {bikes.map((x, id) => (
          <div
            className="card m-4"
            style={{ width: "300px", borderRadius: "10px" }}
          >
            <div className="card-image">
              <figure className="image is-4by3 m-3">
                <img src={x.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="p_detail">
                  <strong>Puesto Numero {id + 1}</strong>
                </p>

                <p className="p_detail">Nombre: {x.name}</p>

                <p className="p_detail">Categoria: {x.category}</p>

                <p className="p_detail">{x.maker}</p>

                <p className="p_detail">Precio: {x.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const LazyBestSellers = () => {
    const {isNearScreen, fromRef}  = useNearScreen()

    return (
        <div ref={fromRef}>
            {isNearScreen ? <BestSellers/> : null}
        </div>
    )
}

export default LazyBestSellers
