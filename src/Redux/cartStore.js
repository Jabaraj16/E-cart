import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./Slices/productSlices";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSlice from "./Slices/cartSlice";

const cartSore=configureStore({
    reducer:{
        productSlices,
        wishlistSlice,
        cartReducer:cartSlice
    }
})

export default cartSore