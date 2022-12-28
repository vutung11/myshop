import { configureStore } from "@reduxjs/toolkit";
import iphoneReducer from './iphoneSlice';
import macbookReducer from './macbookSlice';
import productidReducer from './getProductByIdSlice'

export default configureStore({
    reducer: {
        iphones: iphoneReducer,
        macbooks: macbookReducer,
        productbyid: productidReducer,
    }
})