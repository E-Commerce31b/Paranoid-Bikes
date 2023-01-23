import { createSlice, current } from "@reduxjs/toolkit";
import { putUserCart } from './usersActions.js';
import clone from 'just-clone'

const initialState = {
  users: [],
  user: {},
  token: "",
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
    // manageCart: (state, { payload }) => {
    //   let selected = state.user.purchased.find(p => p.id === payload.id)
    //   if(payload.action === 'increment' && selected) {
    //     selected.count += + 1
    //   } else if(payload.action === 'increment') {
    //     selected = clone(payload.product)
    //     selected.count += 1
    //     state.user.purchased.push(selected)
    //   } else if(payload.action === 'decrement' && selected.count > 1) {
    //     selected.count -= 1
    //   }
    //     const userId = state.user.id
    //     const idBike = selected.id
    //     const userCart = state.user.purchased
    //     const data = { userId, idBike, userCart }
    //     putUserCart(data)
    //   },
    // // removeFromCart(state, {payload}) {
    // //     state.user.purchased = state.user.purchased.filter(p => p.id !== payload.id);
    //   // }
    // // },
    resetUser: (state) => {
      state.user = {};
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("users/") && action.type.endsWith("/pending"),
        (state) => {
          console.log('hola')
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/getUsers") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.users = action.payload;
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
          action.type.startsWith("users/putUser") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          console.log(action.payload)
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/postUser") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/deleteUser") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.users = state.users.filter((p) => p.id !== action.payload.id);
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
export const usersStatus = (state) => state.status;
export const usersError = (state) => state.error;
export const user = (state) => state.user;
export const userStatus = (state) => state.status;
export const userError = (state) => state.error;

export const {
  loggedUser,
  manageCart,
  resetUser,
} = usersSlice.actions;

export default usersSlice.reducer;
