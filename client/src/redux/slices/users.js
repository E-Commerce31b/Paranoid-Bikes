import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    user: {},
    logged: {},
    status: "",
    error: ""
}

export const clientsSlice = createSlice({
    name: 'clientsSlice',
    initialState: initialState,
    reducers: {
        loggedUser: (state, {payload}) => {
        state.logged = payload
        }
    },
    extraReducers(builder) {
        builder 
            .addMatcher(
            (action) => action.type.startsWith("users/") && action.type.endsWith("/pending"),
            (state) => {state.status = 'loading'}
            )
            .addMatcher(
            (action) => action.type.startsWith("users/getUsers") && action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.status = 'succeeded'
                state.clients = action.payload
            }
            )
            // .addMatcher(
            //   (action) => action.type.startsWith("users/getUser") && action.type.endsWith("/fulfilled"),
            //   (state, action) => {
            //     state.status = 'succeeded'
            //     state.client = action.payload
            //   }
            // )
            .addMatcher(
            (action) => action.type.startsWith("users/postUser"||"clients/putUser") && action.type.endsWith("/fulfilled"),
            (state) => {
                state.status = 'succeeded'
            }
            )
            .addMatcher(
            (action) => action.type.startsWith("users/deleteUser") && action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.status = 'succeeded'
                state.clients = state.clients.filter(p => p.id !== action.payload.id)
            }
            )
            .addMatcher(
            (action) => action.type.startsWith("users/") && action.type.endsWith("/rejected"),
            (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }
            )
        }, 
});

export const pacients = (state) => state.users
export const pacientsStatus = (state) => state.status
export const pacientsError = (state) => state.error
export const pacient = (state) => state.user
export const pacientStatus = (state) => state.status
export const pacientError = (state) => state.error

export const { loggedUser } = clientsSlice.actions

export default clientsSlice.reducer