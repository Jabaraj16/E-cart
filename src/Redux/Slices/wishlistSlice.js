import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWhishlist:(state,action)=>{
            state.wishlist.push(action.payload)
           
        },
        removeFromWhishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!==action.payload)
            
        }
    }
})

export const {addToWhishlist,removeFromWhishlist}=whishlistSlice.actions
export default whishlistSlice.reducer
