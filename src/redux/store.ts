import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import loadingReduce from "./features/loadingSlice";
import productReduce from "./features/productSlice";
export const store = configureStore({
    reducer: {
        cartReducer,
        productReduce,
        loadingReduce,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;