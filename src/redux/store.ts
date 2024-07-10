import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        user: userReducer,
    },
})