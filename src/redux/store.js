import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import serviceReducer from "./serviceSlice";

const store = configureStore({
    reducer: {
        authStore: authReducer,
        serviceStore: serviceReducer,
    },
});
export default store;