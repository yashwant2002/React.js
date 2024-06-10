import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from '../features/cartSlicer'

export const store = configureStore({
    reducer:{
        cart : cartSlicer,
    },}
)