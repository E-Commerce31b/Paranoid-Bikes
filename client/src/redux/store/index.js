import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users";
import products from "../slices/products";
import reviews from "../slices/reviews";
import filters from '../slices/filters'

export const store = configureStore({
  reducer: {
    users,
    products,
    reviews,
    filters
  },
});
