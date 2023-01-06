import React from "react";
import { useSelector } from "react-redux";
import Pagination from "./pagination/Pagination";
import RenderProducts from "./RenderProducts";


export default function BestSellers() {

  const bestSellers = useSelector((state) => state.products.bestSellers);
  const currentPage = useSelector(state => state.products.currentPage);

  const slicedProducts = () =>{
    if(bestSellers) {
      // console.log(filtered.products);
      return bestSellers.slice(currentPage, currentPage + 5);
    }
  }

  return (
      <div>
          <div class="content has-text-centered mt-3">
            <h1 style={{color:'white'}}>Más Vendidos</h1>
          </div>
          <div><RenderProducts slicedProducts={slicedProducts}/></div>
    <div><Pagination currentPage={currentPage} filtered={bestSellers}/></div>
      </div>
  )
};
