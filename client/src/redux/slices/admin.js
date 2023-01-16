import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
  admin: {},
  logged: {},
  status: "",
  error: "",
};

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState: initialState,
  reducers: {
    loggedAdmin: (state, { payload }) => {
      state.logged = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/") && action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/getAdmin") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.admins = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/getAdmins/") &&
          action.type.endsWith("fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.admin = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/postAdmin" || "admin/putAdmin") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/deleteAdmin") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.admins = state.admins.filter((p) => p.id !== action.payload.id);
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("admin/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

// export const pacients = (state) => state.users;
// export const pacientsStatus = (state) => state.status;
// export const pacientsError = (state) => state.error;
// export const pacient = (state) => state.user;
// export const pacientStatus = (state) => state.status;
// export const pacientError = (state) => state.error;

// export const { loggedUser } = adminSlice.actions;

export default adminSlice.reducer;
