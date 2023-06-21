import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    services: [],
    isLoading: false,
};

export const getServices = createAsyncThunk(
    "serviceSlice/getSlice",
    async(args, { dispatch, getState, rejectWithValue }) => {
        try {
            const { data } = await axios.get("/service");
            console.log(data.data);
            return data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getServiceById = createAsyncThunk(
    "serviceSlice/getServiceById",
    async(_id, { dispatch, getState, rejectWithValue }) => {
        try {
            const { data } = axios.get("/service/:id", _id);
            console.log(data.data);
            return data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
const serviceSlice = createSlice({
    name: "serviceSlice",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getServices.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getServices.fulfilled, (state, action) => {
            state.isLoading = false;
            state.services = action.payload;
        });
        builder.addCase(getServices.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(getServiceById.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getServiceById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.services = action.payload;
        });
        builder.addCase(getServiceById.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { setLoading } = serviceSlice.actions;

export default serviceSlice.reducer;