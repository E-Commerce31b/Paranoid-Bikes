import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsOffers: [],
  newProducts: [],
  product: {},
  categories: ["road", "urban", "BMX", "mountain", "youth"],
  payments: ["Transferencia", "Tarjeta de crédito"],
  status: "",
  error: "",
};
 
const handleFavourites = (state, payload) => {
    for (const favourite of state.favourites) {
        if(favourite._id === payload._id) {
        state.favourites = state.favourites.filter((f) => f._id !== payload._id)
        return state.favourites
        }}
    state.favourites.push(payload)
    return state.favourites
}

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("products/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("products/getProducts") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.products = action.payload;
          // const today = `0${new Date().getDate()}`
          // const tomorrow = `0${new Date().getDate()}` + 1
          // const tomorrowAfter = `0${new Date().getDate()}` + 2
          // const month = new Date().getMonth() + 1
          // const year = new Date().getFullYear()
          // const fullToday = year + '/' + month + '/' + today
          // const fullTomorrow = year + '/' + month + '/' + tomorrow
          // const fullTomorrowAfter = year + '/' + month + '/' + tomorrowAfter
          // state.todayQueries = action.payload.filter(q => q.date.slice(0, 10) === fullToday)
          // state.tomorrowQueries = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrow)
          // state.tomorrowAfterQueries = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrowAfter)
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("products/getProductById") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.query = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith(
            "products/postProduct" || "queries/putProduct"
          ) && action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("products/deleteProduct") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.queries = state.queries.filter((p) => p.id !== action.payload);
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("products/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

// export const queries = (state) => state.products
// export const queriesStatus = (state) => state.status
// export const queriesError = (state) => state.error
// export const querie = (state) => state.product
// export const querieStatus = (state) => state.status
// export const querieError = (state) => state.error

export default productsSlice.reducer;
