import React from "react";
import { useSelector } from "react-redux";
import Pagination from "./pagination/Pagination";
import RenderProducts from "./RenderProducts";


export default function BestSellers() {

  const filtered = useSelector((state) => state.products);
  const currentPage = useSelector(state => state.products.currentPage);

  const slicedProducts = () =>{
    if(filtered) {
      // console.log(filtered.products);
      return filtered.products.slice(currentPage, currentPage + 16);
    }
  }

  return (
      <div>
          <div style={{font:"Audiowide", fontSize:24, width:"40%", display:"flex", textAlign:"center"}}>
            <h1>Más Vendidos</h1>
          </div>
          <div><RenderProducts slicedProducts={slicedProducts}/></div>
    <div><Pagination currentPage={currentPage} filtered={filtered}/></div>
      </div>
  )
};
