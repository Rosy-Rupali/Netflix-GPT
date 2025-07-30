import { createSlice } from "@reduxjs/toolkit";

const gptSlice =  createSlice({
    name: 'gptSearch',
    initialState:{
        showSearchView: false
    },
    reducers : {
        toggleGptSearchView:(state) =>{
            state.showSearchView = !state.showSearchView;
        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;