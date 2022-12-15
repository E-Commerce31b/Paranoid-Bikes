import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk('reviews/getReviews', async () => {
    try {
        const response = await axios.get('https://api-pro-fy-production.up.railway.app/api/reviews')
        // const response = await axios.get('http://192.168.0.1:3001/api/reviews')
        const data = response.data.data.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }        
})

export const postReview = createAsyncThunk('reviews/postReview', async (newQuery) => {
    try {
        const response = axios.post('https://api-pro-fy-production.up.railway.app/api/reviews', newQuery)
        // const response = axios.post('http://localhost:3001/api/reviews', newQuery)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putReview = createAsyncThunk('reviews/putReview', async (id, query) => {
    try {
        const response = axios.put(`https://api-pro-fy-production.up.railway.app/api/reviews/${id}`, query)
        // const response = axios.put(`http://localhost:3001/api/reviews/${id}`, query)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
    try {
        const response = axios.delete(`https://api-pro-fy-production.up.railway.app/api/reviews/${id}`)
        // const response = axios.delete(`http://localhost:3001/api/reviews/${id}`)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})