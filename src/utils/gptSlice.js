import { createSlice } from "@reduxjs/toolkit";

const gptSlice =  createSlice({
    name: 'gptSearch',
    initialState:{
        showSearchView: false,
        gptMovies: null,
        gptMovieNames: null,
    },
    reducers : {
        toggleGptSearchView:(state) =>{
            state.showSearchView = !state.showSearchView;
        },
        addGPTMoviesResult: (state, action) =>{
            const {gptMovieNames, gptMovies} = action.payload;
            state.gptMovieNames = gptMovieNames;
            state.gptMovies = gptMovies;
        }
    }
})

export const {toggleGptSearchView, addGPTMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;