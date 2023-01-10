import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users";
import products from "../slices/products";
import reviews from "../slices/reviews";
import filters from '../slices/filters'
import { getProducts } from '../slices/productsActions'
import { getUsers } from '../slices/usersActions'

export const store = configureStore({
  reducer: {
    users,
    products,
    reviews,
    filters
  },
});

store.dispatch(getProducts())
store.dispatch(getUsers())