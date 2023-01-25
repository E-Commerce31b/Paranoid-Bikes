import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("reviews/getReviews", async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}/api/comments`);
    // const data = response.data.sort(function (a, b) {
    //   if (a.author.first_name < b.author.first_name) return -1;
    //   if (a.author.first_name > b.author.first_name) return 1;
    //   return 0;
    // });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (newReview) => {
    try {
      const response = axios.post(
        `${process.env.REACT_APP_URL}/api/comments`,
        newReview
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const putReview = createAsyncThunk(
  "reviews/putReview",
  async (id, review) => {
    try {
      const response = axios.put(
        `${process.env.REACT_APP_URL}api/comments/${id}`,
        review
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id) => {
    try {
      const response = axios.delete(`${process.env.REACT_APP_URL}/api/comments/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);