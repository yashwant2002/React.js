// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Ensure correct path

const store = configureStore({
  reducer: {
    counter: counterReducer, // Ensure it matches useSelector key
  },
});

export default store; // ✅ Ensure default export
