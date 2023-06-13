import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isLoged: false,
    token: null,
};

export const login = createAsyncThunk(
    "authSlice/login",
    async(user, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/auth/login`, user);
            // se guarda todo el usuario en el localstorage con el token incluido
            localStorage.setItem("user", JSON.stringify(data.data));
            sessionStorage.setItem("token", JSON.stringify(data.data.token))
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

            return JSON.parse(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("authSlice/logout", async(_, {}) => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("token")
});

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setIsLoged: (state, action) => {
            state.isLoged = true;
        },
        setUser: (state, action) => {
            state.user = localStorage.getItem("user")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoged = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.token = action.payload.token;
                state.isLoged = true;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoged = false;
            state.user = null;
            state.token = null;
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

export const { setIsLoged, setUser } = authSlice.actions;

export default authSlice.reducer;