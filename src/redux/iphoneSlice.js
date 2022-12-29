import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import iphoneApi from "../api/iphoneApi";

const initialState = {
    iphones: [],

}
export const getAllIphone = createAsyncThunk(
    'iphones/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await iphoneApi.getAllIphone();

            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const iphoneSlice = createSlice({
    name: 'iphones',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllIphone.fulfilled, (state, action) => {
            if (state.iphones.length === 0)
                state.iphones.push(...action.payload.data)
        })
    }

})

export default iphoneSlice.reducer;