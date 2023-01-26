import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import clone from "just-clone";

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/users/${id}`
    );
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
  async ({ _id, ...user }) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/users/${_id}`,
        user
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const putUserCart = createAsyncThunk(
  "users/putUserCart",
  async (data) => {
    try {
      const { product, user, action } = data;
      console.log(product, user, action);
      let cart = clone(user.cart);
      let newCart = [];
      let selected = cart.find((p) => p._id === product._id);
      console.log(selected);
      if (action === "increment" && selected) {
        selected.count += 1;
        for (let bike of cart) {
          newCart.push({ bike: bike["_id"], count: bike["count"] });
        }
        console.log(newCart);
      } else if (action === "increment") {
        selected = clone(product);
        selected.count = 1;
        console.log(selected);
        for (let bike of cart) {
          newCart.push({ bike: bike["_id"], count: bike["count"] });
        }
        console.log(newCart);
        newCart.push({ bike: selected._id, count: selected.count });
        console.log(newCart);
      } else if (action === "decrement" && selected.count > 1) {
        selected.count -= 1;
        for (let bike of cart) {
          newCart.push({ bike: bike["_id"], count: bike["count"] });
        }
      } else if (action === "decrement" && selected.count === 0) {
        return;
      }
      console.log(newCart);
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/users/${user._id}`,
        {
          cart: newCart,
        }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
  );

  export const putUserHistory = createAsyncThunk(
    "users/putUserHistory",
    async (data) => {
      try {
        const {user, id} = data
        let prevHistory = clone(user.history)
        for(let bike of prevHistory) {
          if(bike._id === id) {
            return user
          }
        }
        const response = await axios.put(
          `${process.env.REACT_APP_URL}/api/users/${user._id}`,
          {
            "history": [...prevHistory, id]
          }
          );
          return response.data
      } catch (error) {
        return {message:error}
      }
    }
  )
  export const removeFromCart = createAsyncThunk(
    "users/putUserCart",
    async (data) => {
      try {
        const { product, user} = data
        let cart = clone(user.cart)
        let newCart = [];
        cart = cart.filter(b => b._id !== product._id)
        for(let bike of cart) {
          newCart.push({bike: bike['_id'], count: bike['count']})
        }
        const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/users/${user._id}`,
        {
          cart: newCart,
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const cleanCart = createAsyncThunk("users/putUserCart", async (user) => {
  console.log("user", user);
  try {
    let cart = clone(user.cart);
    let newCart = [];
    console.log("newCart", newCart);
    console.log("cart", cart);
    console.log("user", user);
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/users/${user._id}`,
      {
        cart: newCart,
        purchased: [...user.purchased, cart].flat(),
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
});
