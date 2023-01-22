import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Counter = ({ counter, setCounter, stock }) => {
  const decrement = () => {
    console.log(counter > 0);
    console.log(counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => decrement()}>-</Button>
        <p className="is-size-4 px-5">{counter}</p>
        <Button onClick={() => increment()}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
