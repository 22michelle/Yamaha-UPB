import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isLoged: false,
    isLoading: false,
    token: null,
};

export const login = createAsyncThunk(
    "authSlice/login",
    async(user, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/auth/login`, user);
            // se guarda todo el usuario en el localstorage con el token incluido
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
            const token = sessionStorage.getItem(token);
            if (!token) {
                return dispatch(logout());
            }
            return token;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("authSlice/logout", async(_, {}) => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
});

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setIsLoged: (state, action) => {
            state.isLoged = true;
        },
        setUser: (state, action) => {
            state.user = localStorage.getItem("user");
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoged = false;
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.token = action.payload.token;
                state.isLoged = true;
                state.isLoading = false;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoged = false;
            state.user = null;
            state.token = null;
            state.isLoading = false;
        });

        //Verificar Login
        builder.addCase(verifyLogin.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.token = action.payload.token;
                state.isLoged = true;
            }
        });

        //Log Out
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoged = false;
            state.user = null;
            state.token = null;
        });
    },
});

export const { setIsLoged, setUser, setIsLoading } = authSlice.actions;

export default authSlice.reducer;