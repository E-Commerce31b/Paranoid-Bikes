import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  status: "",
  error: "",
};

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("reviews/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("reviews/getReviews") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.reviews = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("reviews/postReview" || "reviews/putReview") &&
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("reviews/deleteReview") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          state.reviews = state.reviews.filter(
            (p) => p.id !== action.payload.id
          );
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("reviews/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const reviews = (state) => state.reviews;
export const reviewsStatus = (state) => state.status;
export const reviewsError = (state) => state.error;
export const reviewStatus = (state) => state.status;
export const reviewError = (state) => state.error;

export default reviewsSlice.reducer;
