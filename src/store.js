import {configureStore} from "@reduxjs/toolkit"
import logReducer from "./loginSlice"


export default configureStore({
    reducer:{
        log:logReducer
    }
})

