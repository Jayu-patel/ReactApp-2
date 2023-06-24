import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataA = createAsyncThunk('fetchDataA', async ()=> {
    const res = await fetch(`https://dummyjson.com/users`)
    return res.json()
})

const key ="live_tImLeo4OWAXw3SmAMajWtCuzmrSrtc3ZnPW9mLjiqfNxbKTKdiGMFw8ycYrMRIJx"

export const fetchDataB = createAsyncThunk('fetchDataB', async ()=> {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=30`,{
        headers: {
            "x-api-key": key,
        }
    })
    return res.json()
})

const apiDataA = createSlice({
    name: 'apiA',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers : (b) =>{
        b.addCase(fetchDataA.pending, (state, action)=>{
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
    extraReducers : (b) =>{
        b.addCase(fetchDataB.pending, (state, action)=>{
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