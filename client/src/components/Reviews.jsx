import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getReviews, postReview } from "../redux/slices/reviewsActions";

export default function Reviews() {
  const user = useSelector((state) => state.users.user);
  const products = useSelector((state) => state.products.products);
  const reviews = useSelector((state) => state.reviews.reviews);
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  const [submited, setSubmited] = useState(false);
  const dispatch = useDispatch();
  console.log("ID", id);

  const handleSubmit = (e) => {
    setSubmited(!submited);
    e.preventDefault();
    const bike = id;
    const author = user._id;
    const text = commentText;
    const data = { text, author, bike };
    dispatch(postReview(data));
    setCommentText("");
  };
  useEffect(() => {
    dispatch(getReviews());
  }, [submited]);

  const reviewsProduct = () => {
    if (reviews.length) {
      const commentBike = reviews.filter((item) => item.bike._id === id);
      return commentBike;
    } else {
      return false;
    }
  };
  return (
    <>
      <h1>Comentarios del producto</h1>
      <ul>
        {/* {reviewsProduct().map()}
                {console.log(reviewsProduct)} */}
        {reviewsProduct().length ? (
          reviewsProduct().map((bike) => {
            console.log(bike);
            return (
              <li>
                <p>
                  <strong>{bike.text}</strong> {bike.author.email}
                </p>
              </li>
            );
          })
        ) : (
          <div>No hay comentarios para este producto</div>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Deje su comentario"
          variant="outlined"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button type="submit">Submit Comment</Button>
      </form>
    </>
  );
}
