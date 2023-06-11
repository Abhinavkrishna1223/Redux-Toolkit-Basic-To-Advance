import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";


const store = configureStore({
    reducer:{
        users: userSlice.reducer,  //This method gives all access of userSlice to store //

    },
});

export default store;