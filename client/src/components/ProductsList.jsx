import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productsActions";
import Filters from "./Filters.jsx";
import Sorters from "./Sorters.jsx";
import RenderProducts from "./RenderProducts.jsx";
import NotFound from './NotFound.jsx'
import Pagination from "../components/pagination/Pagination.jsx";
import Loader from "../components/Loader";

const ProductsList = () => {
  const filtered = useSelector((state) => state.products.filtered);
  const currentPage = useSelector((state) => state.products.currentPage);
  const status = useSelector((state) => state.products.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const slicedProducts = () => {
    // if(product) return product;
    if (filtered) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      const stockBike = filtered.filter((item)=>{
        return item.stock > 0
      })
      return stockBike.slice(currentPage, currentPage + 15);
    }
  };

  return (
    <div>
      <Loader loading={status}></Loader>
      <div className="flex is-flex-direction-row  is-justify-content-space-evenly">
        <div>
          <Filters />
        </div>
        <div>
          <Sorters />
        </div>
      </div>
      <div>
        { slicedProducts() && slicedProducts().length > 0
          ? <RenderProducts slicedProducts={slicedProducts} />
          : <NotFound/>
        
        }
      </div>
      <div className="p-6 flex is-justify-content-center is-flex-direction-row">
        <Pagination currentPage={currentPage} filtered={filtered} />
      </div>
    </div>
  );
};

export default ProductsList;
