import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAdmins = createAsyncThunk("admin/getAdmin", async (token) => {
  try {
    // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/users')
    // const response = await axios.get("http://localhost:3001/api/users");
    const response = await axios.get(
      "https://paranoid-bikes-backend.onrender.com/api/admin",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

export const getAdmin = createAsyncThunk("admin/getAdmin", async (id) => {
  try {
    // const response = await axios.get(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)
    // const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/admin/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postAdmin = createAsyncThunk(
  "admin/postAdmin",
  async (newUser) => {
    try {
      const response = await axios({
        method: "post",
        // url: "https://api-paranoid-bikes-production.up.railway.app/api/users",
        // url: "http://localhost:3001/api/users",
        url: `${process.env.REACT_APP_URL}/api/admin`,
        data: newUser,
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const putAdmin = createAsyncThunk(
  "admin/putAdmin",
  async ({ _id, ...user }) => {
    try {
      // const response = await axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/users/${_id}`, pacient)
      const response = await axios.put(
        // `http://localhost:3001/api/users/${_id}`,
        `${process.env.REACT_APP_URL}/api/admin/${_id}`,
        user
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteAdmin = createAsyncThunk("admin/deleteAdmin", async (id) => {
  try {
    // const response = await axios.delete(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)
    const response = await axios.delete(
      // `http://localhost:3001/api/userks/${id}`
      `${process.env.REACT_APP_URL}/api/admin/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});
