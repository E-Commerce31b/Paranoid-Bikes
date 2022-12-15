import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/slices/productsActions'

const ComponenteRedux = () => {

  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  console.log(products[0])

  useEffect(() => {dispatch(getProducts())}, [dispatch])

  return (
    <div><p>Bicicletas en venta:</p> 
      {(products.length > 0) ? products.map((p, i) => {return (<p key={i}>{p.name}</p>)}) : <p>Loading...</p>}
    </div>
  )
}

export default ComponenteRedux
