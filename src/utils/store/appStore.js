import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import moviesReducer from './slices/moviesSlice'
import configReducer from './slices/configSlice'
import gptReducer from './slices/gptSlice'

const appStore = configureStore({
    reducer: {
        config:configReducer,
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    }
})

export default appStore