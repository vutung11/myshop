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
            console.log(action.payload)
            action.payload.data.map(item => {
                if (item.attributes.product_category_name === 'iphone') {
                    state.iphones.push(item)
                }
                return null
            })
        })
    }

})

export default iphoneSlice.reducer;