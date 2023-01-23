import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch } from 'react-redux'
import { removeFromCart } from "../redux/slices/usersActions";

const Counter = ({ count, product, user, putUserCart }) => {

  const dispatch = useDispatch()

  const decrement = () => {
    console.log(count > 1);
    console.log(count);
    if (count > 1) {
      console.log('entramos')
      dispatch(putUserCart({product, user, action: "decrement"}))
      } else {
        console.log('entramos')
      dispatch(removeFromCart({product, user}))
      }
  }

  const increment = () => {
    if (count < product.stock) {
      dispatch(putUserCart({product, user, action: "increment"}))
    }
  };
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => decrement()}>-</Button>
        <p className="is-size-4 px-5">{count}</p>
        <Button onClick={() => increment()}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
