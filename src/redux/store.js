<<<<<<< HEAD
import { createStore, combineReducers } from 'redux';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
=======
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        authStore: authReducer,
    },
});
export default store;
>>>>>>> 4bdec4053e6f392d051a916cf08d19840b39ac26
