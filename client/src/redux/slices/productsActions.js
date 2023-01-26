import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/bikes`
      );

      const data = response.data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      const mapeo = data.map((q) => {
        return {
          _id: q._id,
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
          createdAt: q.createdAt,
        };
      });
      return mapeo;
    } catch (error) {
      return error.message;
    }
  }
);
export const getProduct = createAsyncThunk(
  "products/getProductById",
  async (_id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/bikes/${_id}`
      );
      // const data = response.data;
      const bike = response.data;

      return {
          _id: bike._id,
          name: bike.name,
          category: bike.category,
          maker: bike.maker,
          created: bike.year,
          gender: bike.gender,
          count: bike.count,
          price: `${bike.priceAmount} ${bike.priceCurrency}`,
          priceAmount: bike.priceAmount,
          stock: bike.stock,
          image: bike.image,
          isEBike: bike.isEBike,
          createdAt: bike.createdAt
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
    const {product, bike} = data
    console.log(product)
    console.log(bike)
    const sum = bike.count + product.count
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/admin/bikes/${product._id}`,
        { count: sum }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const reduceStock = createAsyncThunk(
  "products/reduceStock",
  async ({ _id, ...product }) => {
    try {
      // const config = {
      //   headers: { authorization: "Bearer " + token },
      // };
      console.log(product)
      product.stock = product.stock - product.count;
      console.log(product.stock)
      console.log(product.count)
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/admin/bikes/${_id}`,
        { stock: product.stock },
              );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
