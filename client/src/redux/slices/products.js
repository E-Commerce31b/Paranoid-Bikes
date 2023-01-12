import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsOffers: [],
  someProducts: [],
  newProducts: [],
  product: {},
  // categories: ["road", "urban", "BMX", "mountain", "youth"],
  categories: [],
  pricesAmounts: [],
  makers: [],
  genders: [],
  payments: ["Transferencia", "Tarjeta de crédito"],
  favourites: [],
  filtered: [],
  currentPage: [],
  bestSellers: [],
  status: "",
  error: "",
};

const handleFavourites = (state, payload) => {
  for (const favourite of state.favourites) {
    if (favourite._id === payload._id) {
      state.favourites = state.favourites.filter((f) => f._id !== payload._id);
      return state.favourites;
    }
  }
  state.favourites.push(payload);
  return state.favourites;
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
    equalFilters: (state, action) => {
      state.filters = action.payload;
    },
    replaceFilters: (state, action) => {
      let filter = state.filters.find(
        (filter) => Object.keys(filter)[0] === Object.keys(action.payload)[0]
      );
      if (filter) {
        filter = action.payload;
      }
    },
    filterProducts: (state, { payload }) => {
      state.filtered = state.products.filter((p) =>
        payload.every((f) => p[Object.keys(f)[0]] === Object.values(f)[0])
      );
    },
    handleFavourite: (state, { payload }) => {
      if (state.favourites.length === 0) {
        state.favourites = [payload];
      } else if (
        state.favourites.length === 1 &&
        state.favourites[0]._id === payload._id
      ) {
        state.favourites = [];
      } else {
        handleFavourites(state, payload);
      }
    },
    cleanProduct: (state) => {
      state.professional = {};
    },
    pagination: (state, { payload }) => {
      if (
        payload.page === "posteriores" &&
        payload.filtered.length > payload.currentPage + 17
      ) {
        let movePage = payload.currentPage + 16;
        state.currentPage = movePage;
      }
      if (!isNaN(payload.page)) {
        let movePage = 0 + 16 * (payload.page - 1);
        state.currentPage = movePage;
      }
      if (payload.page === "anteriores" && payload.currentPage > 0) {
        let movePage = payload.currentPage - 16;
        state.currentPage = movePage;
      }
    },
    cleanCurrentPage: (state) => {
      state.currentPage = 0;
    },
    // product | products

    getProduct: (state, { payload }) => {
      if (/\d+/.test(payload)) {
        state.product = state.products.find((p) => p.id === payload);
        state.filtered = state.products.find((p) => p.id === payload);
      } else {
        state.someProducts = state.products.filter((p) =>
          p.name.includes(payload)
        );
        state.filtered = state.products.filter((p) => p.name.includes(payload));
      }
    },
    getProductsByCategory: (state, { payload }) => {
      state.someProducts = state.products.filter((p) => p.category === payload);
      state.filtered = state.products.filter((p) => p.category === payload);
    },
    sortByName: (state, { payload }) => {
      if (payload === "asc") {
        state.filtered = state.filtered.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        state.filtered = state.filtered.sort(function (a, b) {
          if (b.name < a.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
      }
    },
    sortByPrice: (state, { payload }) => {
      if (payload === "asc") {
        state.filtered = state.filtered.sort(function (a, b) {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
      } else {
        state.filtered = state.filtered.sort(function (a, b) {
          if (b.price < a.price) return -1;
          if (b.price > a.price) return 1;
          return 0;
        });
      }
    },
  },
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
          let categories = state.products.map((p) => p.category);
          state.categories = [...new Set(categories)];
          let prices = state.products.map((p) => p.price);
          prices.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          });
          state.pricesAmounts = [...new Set(prices)];
          let makers = state.products.map((p) => p.maker);
          state.makers = [...new Set(makers)];
          let genders = state.products.map((p) => p.gender);
          state.genders = [...new Set(genders)];
          let sellers = state.products
            .sort(function (a, b) {
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            })
            .slice(1, 5);
          state.bestSellers = sellers;
          // const today = `0${new Date().getDate()}`
          // const tomorrow = `0${new Date().getDate()}` + 1
          // const tomorrowAfter = `0${new Date().getDate()}` + 2
          // const month = new Date().getMonth() + 1
          // const year = new Date().getFullYear()
          // const fullToday = year + '/' + month + '/' + today
          // const fullTomorrow = year + '/' + month + '/' + tomorrow
          // const fullTomorrowAfter = year + '/' + month + '/' + tomorrowAfter
          // state.todayProducts = action.payload.filter(q => q.date.slice(0, 10) === fullToday)
          // state.tomorrowProducts = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrow)
          // state.tomorrowAfterProducts = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrowAfter)
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("products/getProductById") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.product = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith(
            "products/postProduct" || "products/putProduct"
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
          state.products = state.products.filter(
            (p) => p.id !== action.payload
          );
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

// export const products = (state) => state.products
// export const productsStatus = (state) => state.status
// export const productsError = (state) => state.error
// export const product = (state) => state.product
// export const productStatus = (state) => state.status
// export const productError = (state) => state.error

export const {
  setFiltered,
  equalFilters,
  replaceFilters,
  filterProducts,
  handleFavourite,
  cleanProduct,
  pagination,
  getProduct,
  getProductsByCategory,
  sortByName,
  sortByPrice,
  cleanCurrentPage,
} = productsSlice.actions;
export default productsSlice.reducer;
