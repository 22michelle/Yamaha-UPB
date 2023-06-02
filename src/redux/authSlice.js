import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isLoged: false,
};

export const login = createAsyncThunk(
    "authSlice/login",
    async(user, { dispatch, rejectWithValue }) => {
        try {
            const { data, token } = await axios.post(`/login`, user);
            localStorage.setItem("user", JSON.stringify(data.data));
            return data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const verifyLogin = createAsyncThunk(
    "authSlice/verifyLogin",
    async(_, { dispatch, rejectWithValue }) => {
        try {
            const data = localStorage.getItem(user);
            if (!data) {
                return dispatch(logout());
            }
            return JSON.parse(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const logout = createAsyncThunk("authSlice/logout", async(_, {}) => {
    localStorage.removeItem("user");
});


const authSlice = createSlice({

})