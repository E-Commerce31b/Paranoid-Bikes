import { TextField, Button, ListItem, ListItemText, List, Typography } from "@mui/material";
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
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6 has-background-white border-radius">
      <h1 className="title is-5 has-text-black has-text-centered mt-3 mb-3">Comentarios del producto</h1>
      <List>
        {reviewsProduct().length ? (
          reviewsProduct().map((bike) => {
            console.log(bike.author.email);
            return (
              <div style={{fontFamily:'sans-serif', fontSize:18}}>
                <div>
                  <p><strong>{bike.author.email} :</strong> </p>
                  <ul style={{marginLeft:20}}>{" "}{bike.text}</ul>
                  <br />
                </div>
              </div>
            );
          })
          ) : (
            <div>No hay comentarios para este producto</div>
            )}
      </List>
      <div>
      <form onSubmit={handleSubmit}>
        <textarea className="textarea is-small"
          label="Deje su comentario"
          variant="outlined"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          />
        <Button className='mt-3 mb-3' variant='contained' type="submit">Enviar comentario</Button>
      </form>
          </div>
        </div>
      </div>
    </>
  );
}
