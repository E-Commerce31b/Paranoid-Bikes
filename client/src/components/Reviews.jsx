import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getReviews, postReview } from '../redux/slices/reviewsActions'

export default function Reviews() {
    const user = useSelector((state) => state.users.user )
    const products = useSelector((state) => state.products.products)
    const reviews = useSelector(state => state.reviews.reviews);
    const { id } = useParams();
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();
    console.log('ID',id);
    

    useEffect(()=>{
        dispatch(getReviews())
    },[])

    const handleSubmit = (e) => {
    e.preventDefault();
    const bike = id
    const author = user._id
    const text = commentText
    const data = { text, author, bike }
    console.log(data);
    dispatch(postReview(data));
    setCommentText('');
}


const reviewsProduct = () => {
    if(reviews.length){
        console.log('HOLA',id);
        const commentBike = reviews.filter(item => item.bike._id === id)
        return commentBike
    }else{
        return [{text:'No hay comentarios.'}]
    }
}


    

    return (
        <>
            <h2>Comentarios del producto</h2>
            <ul>
                {/* {reviewsProduct().map()}
                {console.log(reviewsProduct)} */}
                {reviewsProduct().map((bike, i) => {
                    console.log('BIKE',bike);
                    return(
                        <li key={i}>{bike.text}</li>
                        )
                    })}
                    </ul>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Deje su comentario'
                    variant='outlined'
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <button type="submit">Submit Comment</button>
            </form>
        </>
    )
}
