import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null,
    isLoged: false
}

export const login = createAsyncThunk(
    "authSlice/login",
    async(user, { dispatch, rejectWithValue }) => {
        try {
            const { data, token } = await axios.post(`/login`, user)
            localStorage.setItem("user", JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error.respo)
        }
    }
)