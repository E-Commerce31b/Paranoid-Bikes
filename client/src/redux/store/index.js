import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users.js";
import products from "../slices/products.js";
import reviews from "../slices/reviews.js";
import filters from '../slices/filters.js'
import { getProducts } from '../slices/productsActions.js'
import { getUsers } from '../slices/usersActions.js'

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