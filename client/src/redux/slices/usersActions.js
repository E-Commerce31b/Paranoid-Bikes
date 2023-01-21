import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postUser = createAsyncThunk("users/postUsers", async (newUser) => {
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/api/users`,
      data: newUser,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const putUser = createAsyncThunk(
  "users/putUser",
  async (data) => {
    try {
      const {idUser, userData} = data
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/users/${idUser}`,
        userData
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const putUserCart = createAsyncThunk(
  "users/putUser",
  async (data) => {
    try {
      const {idUser, idBike, userCart} = data
      console.log(idUser, idBike, userCart)
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/users/${idUser}`,
        idBike,
        userCart
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);