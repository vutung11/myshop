import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import macbookApi from "../api/macbookApi";

const initialState = {
    macbooks: [],

}
export const getAllMacbook = createAsyncThunk(
    'macbooks/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await macbookApi.getAllMacbook();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const macbookSlice = createSlice({
    name: 'macbooks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMacbook.fulfilled, (state, action) => {
            action.payload.data.map(item => {
                if (item.attributes.product_category_name === 'macbook') {
                    state.macbooks.push(item)
                }
                return null
            })
        })
    }

})

export default macbookSlice.reducer;