import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users.js";
import products from "../slices/products.js";
import reviews from "../slices/reviews.js";
import filters from "../slices/filters.js";
import admins from "../slices/admin.js";
// import auth from "../slices/auth.js"
import { getProducts } from "../slices/productsActions.js";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};
HOLA
const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

export const store = configureStore({
  reducer: {
    users,
    products,
    reviews,
    filters,
    admins,
    // auth
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

store.dispatch(getProducts());
