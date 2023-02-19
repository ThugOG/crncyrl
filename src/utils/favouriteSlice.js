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
        removeSelection: (state, action)=>{
            delete state.favs[action.payload]
        },
        clearFavourite: (state)=>{
            state.favs = []
        }
    }
})

export const {addFavourite, removeSelection, clearFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer