import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dotenv from "dotenv";
dotenv.config();

export const getReviews = createAsyncThunk("reviews/getReviews", async () => {
  try {
    // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/reviews')
    // const response = await axios.get("http://localhost:3001/api/reviews");
    const response = await axios.get(`${process.env.URL}/api/reviews`);
    const data = response.data.sort(function (a, b) {
      if (a.author.first_name < b.author.first_name) return -1;
      if (a.author.first_name > b.author.first_name) return 1;
      return 0;
    });
    return data;
  } catch (error) {
    return error.message;
  }
});

export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (newReview) => {
    try {
      // const response = axios.post('https://api-paranoid-bikes-production.up.railway.app/api/reviews', newQuery)
      const response = axios.post(
        // "http://localhost:3001/api/reviews",
        `${process.env.URL}/api/reviews`,
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
      // const response = axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/reviews/${id}`, query)
      const response = axios.put(
        // `http://localhost:3001/api/reviews/${id}`,
        `${process.env.URL}api/reviews/${id}`,
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
      // const response = axios.delete(`https://api-pro-fy-production.up.railway.app/api/reviews/${id}`)
      const response = axios.delete(`${process.env.URL}/api/reviews/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
