import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPacients = createAsyncThunk('users/getUsers', async () => {
    try {
        // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/users')
        const response = await axios.get('http://localhost:3001/api/users')
        const data = response.data.data.sort(function(a, b) {
            if(a.first_name < b.first_name) return -1;
            if(a.first_name > b.first_name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }        
})

export const getPacient = createAsyncThunk('users/getUser', async (id) => {
    try {
        // const response = await axios.get(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)
        const response = await axios.get(`http://localhost:3001/api/users/${id}`)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const postPacient = createAsyncThunk('users/postUsers', async (newUser) => {
    try {
        const response = await axios({
            method: "post",
            // url: "https://api-paranoid-bikes-production.up.railway.app/api/users",
            url: "http://localhost:3001/api/users",
            data: newUser,
        });
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putPacient = createAsyncThunk('users/putUser', async ({_id, ...user}) => {
    try {
        // const response = await axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/users/${_id}`, pacient)      
        const response = await axios.put(`http://localhost:3001/api/users/${_id}`, user)      
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deletePacient = createAsyncThunk('users/deleteUser', async (id) => {
    try {
        // const response = await axios.delete(`https://api-paranoid-bikes-production.up.railway.app/api/users/${id}`)      
        const response = await axios.delete(`http://localhost:3001/api/users/${id}`)    
        return response.data.data
    } catch (error) {
        return error.message
    }        
})