import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAdmins = createAsyncThunk("admin/getAdmin", async (token) => {
  try {
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
      const response = await axios.put(
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
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/admin/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});


export const postProduct = createAsyncThunk(
  "admin/postProduct",
  async (newBike) => {
      console.log(newBike)
    try {
      // const config = {
      //   headers: {Authorization: `Bearer ${token}`}
      // }
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/admin/bikes`, newBike)
        console.log(response.data)
        return response.data
    } catch (error) {
        return error.message;
      }
    }
  );
  
  export const putProduct = createAsyncThunk(
      "admin/putProduct",
      async ({ id, ...product }) => {
          try {
                const response = await axios.put(`${process.env.REACT_APP_URL}/api/bikes/${id}`, product)
                return response.data
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteProduct = createAsyncThunk("admin/deleteProduct", async (product) => {
  try {
    product.softDelete = true;
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/admin/bikes/${product.id}`,
      product
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteUser = createAsyncThunk("admin/deleteUser", async (user) => {
  try {
    user.softDelete = true;
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/admin/users/${user.id}`,
      user
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const getUsers = createAsyncThunk("admin/getUsers", async () => {

  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}/api/users`);
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