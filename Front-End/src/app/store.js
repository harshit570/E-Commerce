import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import userReducer from "../features/user/userSlice";


export const store = configureStore({
  reducer: {
    // Add your reducers here
    product:productReducer,
    user:userReducer
  },
});