import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('queries/getProducts', async () => {
    try {
        // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/bikes')
        const response = await axios.get('http://localhost:3001/api/bikes')
        const data = response.data.data.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        return data.map(q => {
            return {
                id:data._id,
                name: data.name,
                type: data.type,
                created: data.createdDate,
                genre: data.genre,
                maker: data.maker, 
                size: data.size,
                price: data.price,
                stock: data.stock,
                image: data.image,
                // isExpanded: false,
            }
        })
    } catch (error) {
        return error.message
    }        
})
export const getQueryById = createAsyncThunk('queries/getProductById', async (id) => {
    try {
        // const response = await axios.get(`https://api-paranoid-bikes-production.up.railway.app/api/bikes/${id}`)
        const response = await axios.get(`http://localhost:3001/api/bikes/${id}`)
        const data = response.data.data
                    return {
                        id:data._id,
                        name: data.name,
                        type: data.type,
                        created: data.createdDate,
                        genre: data.genre,
                        maker: data.maker, 
                        size: data.size,
                        price: data.price,
                        stock: data.stock,
                        image: data.image,
                        // isExpanded: false,
                    }
    } catch (error) {
        return error.message
    }        
})

export const postQuery = createAsyncThunk('queries/postProduct', async (newBike) => {
    try {
        // const response = await axios.post('https://api-paranoid-bikes-production.up.railway.app/api/queries', newBike)
        const response = await axios.post('http://localhost:3001/api/bikes', newBike)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putQuery = createAsyncThunk('queries/putProduct', async ({_id, ...query}) => {
    try {
        // const response = await axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/queries/${_id}`, query)
        const response = await axios.put(`http://192.168.0.215:3001/api/bikes/${_id}`, query)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteQuery = createAsyncThunk('queries/deleteProduct', async (id) => {
    try {
        // const response = axios.delete(`https://api-paranoid-bikes-production.up.railway.app/api/queries/${id}`) 
        const response = axios.delete(`http://192.168.0.215:3001/api/bikes/${id}`) 
        return response.data.data
    } catch (error) {
        return error.message
    }        
})