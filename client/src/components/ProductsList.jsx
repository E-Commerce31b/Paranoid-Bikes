import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productsActions";
import Filters from "./Filters.jsx";
import Sorters from "./Sorters.jsx";
import RenderProducts from "./RenderProducts.jsx";
import Pagination from "../components/pagination/Pagination.jsx";

const ProductsList = () => {
  const filtered = useSelector((state) => state.products.filtered);
  const currentPage = useSelector((state) => state.products.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const slicedProducts = () => {
    // if(product) return product;
    if (filtered) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return filtered.slice(currentPage, currentPage + 15);
    }
  };
  console.log("filtered", filtered);
  return (
    <div>
      <div className="flex is-flex-direction-row  is-justify-content-space-evenly">
        <div>
          <Filters />
        </div>
        <div>
          <Sorters />
        </div>
      </div>
      <div>
        <RenderProducts slicedProducts={slicedProducts} />
      </div>
      <div className="p-6 flex is-justify-content-center is-flex-direction-row">
        <Pagination currentPage={currentPage} filtered={filtered} />
      </div>
    </div>
  );
};

export default ProductsList;
