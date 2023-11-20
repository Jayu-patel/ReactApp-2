import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: 'likes',
    initialState : [],
    reducers: {
        push(state){
            for(let i=0; i<30; i++){
                state.push({
                    like: 0,
                    style: 'white'
                })
            }
        },
        like(state,action){
            state[action.payload.n].like = state[action.payload.n].like + 1
            if((state[action.payload.n].like)%2 !== 0){
                state[action.payload.n].style = "red"
            }
            else{
                state[action.payload.n].style = "white"
            }
        }
    }
})

export default likeSlice.reducer
export const {like, push} = likeSlice.actions