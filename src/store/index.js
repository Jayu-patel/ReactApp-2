import { configureStore } from "@reduxjs/toolkit";
import { apiDataA } from "./slices/apiData";
import { apiDataB } from "./slices/apiData";

const store = configureStore({
    reducer: {
        apiA: apiDataA.reducer,
        apiB: apiDataB.reducer
    }
})

export default store