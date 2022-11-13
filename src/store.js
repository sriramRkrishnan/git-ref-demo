import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./features/movieSlice";

export const store = configureStore({
    name : "omdb redux-toolit",
    reducer : {
        movies : movieReducers
    }
})