import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RenderProducts from "./RenderProducts";

export default function Orders() {
  let selected = useSelector((state) => state.users.user.purchased);
  const [loading, setLoading] = useState(false);

  const slicedProducts = () => {
    // if(product) return product;
    if (selected) {
      setLoading(false);
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return selected;
    }
  };

  console.log("selectedddddddddddddd", selected);
  useEffect(() => {
    setLoading(true);
  }, [selected]);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      <div className="column has-text-centered mt-3">
        <h1 className="title is-3">Tus pedidos</h1>
      </div>
      <div>
        <RenderProducts slicedProducts={slicedProducts} />
      </div>
    </div>
  );
}
