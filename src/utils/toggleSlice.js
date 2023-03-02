import {createSlice} from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        toggleBtn: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleBtn} = toggleSlice.actions
export default toggleSlice.reducer