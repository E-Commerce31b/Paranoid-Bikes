import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dotenv from "dotenv";
dotenv.config();

export const getUsers = createAsyncThunk("users/getUsers", async () => {

  try {
    // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/users')
    // const response = await axios.get("http://localhost:3001/api/users");
    const response = await axios.get(`${process.env.URL}/api/users`);
    const data = response.data;
    // .sort(function(a, b) {
    //     if(a.first_name < b.first_name) return -1;
    //     if(a.first_name > b.first_name) return 1;
    //     return 0
    // })
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    // const response = await axios.get(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)
    // const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    const response = await axios.get(`${process.env.URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postUser = createAsyncThunk("users/postUsers", async (newUser) => {
  try {
    const response = await axios({
      method: "post",
      // url: "https://api-paranoid-bikes-production.up.railway.app/api/users",
      // url: "http://localhost:3001/api/users",
      url: `${process.env.URL}/api/users`,
      data: newUser,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const putUser = createAsyncThunk(
  "users/putUser",
  async ({ _id, ...user }) => {
    try {
      // const response = await axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/users/${_id}`, pacient)
      const response = await axios.put(
        // `http://localhost:3001/api/users/${_id}`,
        `${process.env.URL}/api/users/${_id}`,
        user
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    // const response = await axios.delete(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)
    const response = await axios.delete(
      // `http://localhost:3001/api/userks/${id}`
      `${process.env.URL}/api/users/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});
