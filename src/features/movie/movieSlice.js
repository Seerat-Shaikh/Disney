//Redux contains Reducers, Actions and State
//Actions calls the Reducers & Reducers change the state
import { createSlice } from "@reduxjs/toolkit";

// we always have initial state
const initialState = {
    movies: [],  // start with nothing
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {   //current state
            state.movies = action.payload;   //passing new movies from db
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;