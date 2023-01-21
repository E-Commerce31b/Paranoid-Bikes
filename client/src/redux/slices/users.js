import { createSlice } from "@reduxjs/toolkit";
import { putUserCart } from './usersActions.js';

const initialState = {
  token:[],
  user: {},
  logged: {},
  status: "",
  error: "",
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initialState,
  reducers: {
    loggedUser: (state, { payload }) => {
      state.logged = payload;
    },
    managePurchased: (state, { payload }) => {
      let selected = {}
      if(payload.action === 'increment' && state.user.purchased.find(p => p.id === payload.id)) {
        selected = state.user.purchased.find(p => p.id === payload.id)
        selected.amount = selected.amount + payload.counter
      } else if(payload.action === 'increment') {
        selected = payload.products.find(p => p.id === payload.id)
        state.user.purchased.push({selected})
      } else if(payload.action === 'decrement' && payload.counter > 0) {
        selected = state.user.purchased.find(p => p.id === payload.id)
        selected.amount = selected.amount - payload.counter
      } else if(payload.action === 'decrement') {
        state.user.purchased = state.user.purchased.filter(p => p.id !== payload.id);
      }
      const userId = state.user.id
      const idBike = selected.id
      const userCart = state.user.purchased
      const data = { userId, idBike, userCart }
      console.log(data)
      putUserCart(data)
    },
    resetUser: (state) => {
      state.user = {}
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("users/") && action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/getUser/") &&
          action.type.endsWith("fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/postUser" || "users/putUser") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const users = (state) => state.users;
export const usersToken = (state) => state.users.token;
export const usersStatus = (state) => state.status;
export const usersError = (state) => state.error;
export const user = (state) => state.user;
export const userStatus = (state) => state.status;
export const userError = (state) => state.error;

export const { loggedUser, managePurchased, resetUser } = usersSlice.actions;

export default usersSlice.reducer;
