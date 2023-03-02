import {configureStore} from "@reduxjs/toolkit"
import favouriteSlice from "./favouriteSlice"
import toggleSlice, { toggleBtn } from "./toggleSlice"
const store = configureStore({
    reducer:{
        favourite: favouriteSlice,
        toggle: toggleSlice
    }
})
export default store