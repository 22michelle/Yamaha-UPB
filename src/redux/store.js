import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        userStore: authReducer,
    },
});
export default store;