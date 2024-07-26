import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

const store  = configureStore({
    reducer : {
        User : UserSlice
    }
})


export default store