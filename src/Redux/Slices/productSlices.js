import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('allProducts/fetchProducts',async()=>{
    const response=await axios.get('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data.products
})

const productSlices=createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })

        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false
            state.products=[]
            state.error="API fetched failed"
        })
    }
})

export default productSlices.reducer