import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/Api";
import { apiKey } from "../api/Apikey";

const initialState = {
    movies : {},
    search : 'harry',
    id : "",
    singleMovie : {}
}

export const fetchAsyncMovies = createAsyncThunk('moviesList/fetchMovies' , async(val) => {
    const resp = await instance.get(`?apikey=${apiKey}&s=${val}&`);
    return resp.data
})

export const fetchAsyncMoviesbyID = createAsyncThunk('moviesList/fetchMoviesID' , async(val) => {
    const resp = await instance.get(`?apikey=${apiKey}&i=${val}&`);
    return resp.data
})


export const movieSlice = createSlice({

    name:"moviesList",
    initialState,
    reducers : {
        searchMovies : (state,action) =>{
            state.search = action.payload
        },
        getId : (state,action) =>{
            state.id = action.payload
        },
        getSingleMovie : (state,action) =>{
            state.singleMovie = action.payload
            console.log(state.singleMovie);
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled] : (state,action) =>{
            console.log('fullfilled');
            return {...state, movies : action.payload}
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log('rejected');
        },
        [fetchAsyncMoviesbyID.fulfilled] : (state,action) =>{
            return {...state , singleMovie : action.payload}
        }
   
    }
})


export const { searchMovies,getId,getSingleMovie } = movieSlice.actions

export default movieSlice.reducer