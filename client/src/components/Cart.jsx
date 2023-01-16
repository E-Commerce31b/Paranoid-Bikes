import React from 'react'
import { useSelector } from 'react-redux'
import RenderProducts from './RenderProducts'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const selected = useSelector(state => state.users.user.purchased)
    const currentPage = useSelector((state) => state.products.currentPage);
    const user = useSelector((state) => state.users.user)

    // const currentPage = useSelector((state) => state.products.currentPage);
  
    const navigate = useNavigate()

    const handlePayment = () => {
      navigate('/stripe', {state: {selected: selected}})
    }

    const slicedProducts = () => {
      // if(product) return product;
      if (selected) {
        // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
        return selected
        // .slice(currentPage, currentPage + 16);
      }
    };
    return (
        <div>
          {
            (selected?.length > 0) 
            ? 
            <div>
              <RenderProducts slicedProducts={slicedProducts} />
              <button onClick={() => handlePayment()}>Proceder a la compra</button>
            </div>
            : 
            <div>
              <p>No hay productos seleccionados.</p>
              <NavLink to='/'><button>Agregar productos</button></NavLink>
            </div>
          }
        </div>
    )
}

export default Cart