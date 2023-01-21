import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/api/bikes`);
      const data = response.data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      const mapeo = data.map((q) => {
        return {
          id: q._id,
          name: q.name,
          category: q.category,
          maker: q.maker,
          created: q.year,
          gender: q.gender,
          count: q.count,
          price: `${q.priceAmount} ${q.priceCurrency}`,
          priceAmount: q.priceAmount,
          stock: q.stock,
          image: q.image,
          isEBike: q.isEBike,
        };
      });
      console.log(mapeo);
      return mapeo;
    } catch (error) {
      return error.message;
    }
  }
);
export const getProduct = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/api/bikes/${id}`);
      const data = response.data;
      return {
        id: data._id,
        name: data.name,
        type: data.type,
        created: data.year,
        genre: data.gender,
        maker: data.maker,
        size: data.size,
        stock: data.stock,
        price: data.priceAmount,
        image: data.image,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const count = createAsyncThunk(
  "products/count",
  async (data) => {
    try {
      const { id, product } = data
      product.count = product.count + 2
        const response = await axios.put(`${process.env.REACT_APP_URL}/api/bikes/${id}`, {count: product.count})
        console.log(response)
        return response.data
    } catch (error) {
      return error.message;
    }
  }
);
export const reduceStock = createAsyncThunk(
  "products/reduceStock",
  async (data) => {
    try {
      const { id, product } = data
      product.stock = product.stock - 2
        const response = await axios.put(`${process.env.REACT_APP_URL}/api/bikes/${id}`, {stock: product.stock})
        return response.data
    } catch (error) {
      return error.message;
    }
  }
);
