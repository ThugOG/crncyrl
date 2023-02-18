import {configureStore} from "@reduxjs/toolkit"
import favouriteSlice from "./favouriteSlice"
const store = configureStore({
    reducer:{
        favourite: favouriteSlice
    }
})
export default store