import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice"; // Adjust if needed

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Make sure this matches how you access it in `useDispatch`
  },
});
