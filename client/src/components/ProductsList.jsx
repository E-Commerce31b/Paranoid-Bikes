import React from "react";
// import { useEffect } from 'react';
import { useSelector } from "react-redux";
// import { getProducts } from '../redux/slices/productsActions';
import Filters from "./Filters";
import Sorters from "./Sorters";
import RenderProducts from "./RenderProducts";
import Pagination from "../components/pagination/Pagination";

const ProductsList = () => {
  const filtered = useSelector((state) => state.products.filtered);
  const currentPage = useSelector((state) => state.products.currentPage);

  const slicedProducts = () => {
    // if(product) return product;
    if (filtered) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return filtered.slice(currentPage, currentPage + 15);
    }
  };

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div>
        <Sorters />
      </div>
      <div>
        <RenderProducts slicedProducts={slicedProducts} />
      </div>
      <div>
        <Pagination currentPage={currentPage} filtered={filtered} />
      </div>
    </div>
  );
};

export default ProductsList;
