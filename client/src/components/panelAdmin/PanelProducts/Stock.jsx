import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStock } from "../../../redux/slices/adminActions";

export default function Stock(id) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.admins.token);
  console.log("id", id);
  console.log("token", token.length);
  const data = { count, id, token: token };
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const handlesubmit = () => {
    console.log(count, id);
    dispatch(updateStock(data));
  };

  return (
    <div className="buttons are-small flex is-align-content-center is-flex-direction-row">
      <button
        disabled={count <= 0}
        onClick={decrease}
        className="button is-light  has-text-weight-bold"
      >
        <span className="is-size-4 pb-2">-</span>
      </button>
      <span className="is-size-6 tag is-info is-light is-small mb-2">
        {count}
      </span>
      <button
        onClick={increase}
        className="button is-light  has-text-weight-semibold ml-2"
      >
        <span className="is-size-4 pb-2">+</span>
      </button>
      <button onClick={handlesubmit}>Guardar cambios</button>
    </div>
  );
}
