import { createSlice } from "@reduxjs/toolkit";



const wishSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishList:(state,action)=>{
            const existingProduct=state.wishlist.find(item=>item.id==action.payload.id)
            if(existingProduct)
            {
                alert("Product Already exist in Wishlist")
            }
            else{
                alert("Product Added to Wishlist ")
                state.wishlist.push(action.payload)
            }
        },
        removeFromWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishList,removeFromWishList}=wishSlice.actions
export default wishSlice.reducer