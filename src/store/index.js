import { configureStore } from "@reduxjs/toolkit";
import { apiDataA } from "./slices/apiData";
import { apiDataB } from "./slices/apiData";
import likeSlice from "./slices/likeSlice";

const store = configureStore({
    reducer: {
        apiA: apiDataA.reducer,
        apiB: apiDataB.reducer,
        like: likeSlice
    }
})

export default store