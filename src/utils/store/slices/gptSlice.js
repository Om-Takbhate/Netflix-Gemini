import {createSlice} from '@reduxjs/toolkit'


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: []
    },
    reducers: {
        toggleGptSearchView: (state, action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action)=>{
            state.gptMovies = action.payload
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer