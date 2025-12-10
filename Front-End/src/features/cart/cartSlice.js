import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


// Add Items to Cart
export const addItemsToCart=createAsyncThunk('cart/addItemsToCart',async({id,quantity},{rejectWithValue})=>{
  try{
    const {data}=await axios.get(`/api/v1/product/${id}`);
    return {
      product:data.product._id,
      name:data.product.name,
      price:data.product.price,
      image:data.product.images[0].url,
      stock:data.product.stock,
      quantity
    }

    
  }catch(error){
        return rejectWithValue(error.response?.data || 'An Error Occured');
  }
})

const cartSlice=createSlice({
  name:'cart',
  initialState:{
   cartItems:JSON.parse(localStorage.getItem('cartItems'))||[],
   loading:false,
   error:null,
   success:false,
   message:null
  },
  reducers:{
    removeErrors:(state)=> {
      state.error = null;
    },
    removeMessage:(state)=>{
      state.message=null
    }
  },
  extraReducers:(builder)=>{
    // Add Item to cart
    builder.addCase(addItemsToCart.pending,(state)=>{
      state.loading=true,
      state.error=null
    }).addCase(addItemsToCart.fulfilled,(state,action)=>{
      const item=action.payload
      const existingItem=state.cartItems.find((i)=>i.product===item.product)
      if(existingItem){
        existingItem.quantity=item.quantity
        state.message=`Updated ${item.name} quantity in the cart`
      }
      else{
          state.cartItems.push(item);
        state.message=`${item.name} is added to Cart successfully`
      }
      state.loading=false,
      state.error=null
      state.success=true
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    }).addCase(addItemsToCart.rejected,(state,action)=>{
       state.loading=false,
       state.error=action.payload?.message||'an error occured'
    })
  }
})
export const {removeErrors,removeMessage}=cartSlice.actions;
export default cartSlice.reducer;