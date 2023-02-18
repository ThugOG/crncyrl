import {createSlice} from "@reduxjs/toolkit"

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favs: []
    },
    reducers:{
        addFavourite: (state, action)=>{
            state.favs.push(action.payload)
        },
        clearFavourite: (state)=>{
            state.favs = []
        }
    }
})

export const {addFavourite, clearFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer