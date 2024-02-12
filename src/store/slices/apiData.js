import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataA = createAsyncThunk('fetchDataA', async ()=> {
    const res = await axios.get('https://dummyjson.com/users').then(res => res.data)
    return res
})

const apiKey = process.env.KEY

export const fetchDataB = createAsyncThunk('fetchDataB', async ()=> {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=30',{
        headers:{ "x-api-key": apiKey }
    }).then(res => res.data)

    return res
})
const apiDataA = createSlice({
    name: 'apiA',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers : b =>{
        b.addCase(fetchDataA.pending, state =>{
            state.isLoading = true
        })
        b.addCase(fetchDataA.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        b.addCase(fetchDataA.rejected, (state, action)=>{
            state.isError = true
            console.log("error", action.payload)
        })
    }
})

const apiDataB = createSlice({
    name: 'apiB',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers : b =>{
        b.addCase(fetchDataB.pending, state =>{
            state.isLoading = true
        })
        b.addCase(fetchDataB.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        b.addCase(fetchDataB.rejected, (state, action)=>{
            state.isError = true
            console.log("error", action.payload)
        })
    }
})

export {apiDataA, apiDataB}
