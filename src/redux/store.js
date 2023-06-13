import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        authStore: authReducer,
    },
});
export default store;