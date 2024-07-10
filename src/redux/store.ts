import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch;
export default store;