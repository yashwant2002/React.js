import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },

        remove(state,action){
            state = state.filter(item => item.id !== action.payload)
        }
    }
})

export const {add, remove} = cartSlicer.actions;
export default cartSlicer.reducer;