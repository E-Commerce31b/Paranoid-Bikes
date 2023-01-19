import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  logged: {},
  token:[],
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
    saveToken : (state, {payload}) => {
      state.token= payload
    },
    addPurchased: (state, { payload }) => {
      const selected = payload.products.find(p => p.id === payload.id)
      state.user.purchased.push({selected})
    },
    removePurchased: (state, { payload }) => {
      state.user.purchased = state.user.purchased.filter(p => p.id !== payload.id);
    },
    incrementPurchased: (state, { payload }) => {
      const selected = state.user.purchased.find(p => p.id === payload.id)
      selected.amount = selected.amount + payload.counter
    },
    decrementPurchased: (state, { payload }) => {
      const selected = state.user.purchased.find(p => p.id === payload.id)
      selected.amount = selected.amount - payload.counter
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
          action.type.startsWith("users/postUser" || "users/putUser") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
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

export const pacients = (state) => state.users;
export const pacientsStatus = (state) => state.status;
export const pacientsError = (state) => state.error;
export const pacient = (state) => state.user;
export const pacientStatus = (state) => state.status;
export const pacientError = (state) => state.error;

export const { loggedUser, addPurchased, removePurchased, incrementPurchased, decrementPurchased, resetUser, saveToken } = usersSlice.actions;

export default usersSlice.reducer;
