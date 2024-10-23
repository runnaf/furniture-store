import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../../widgets/NewsBlogs/api/blogApi";

const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    // по аналогии следующие api-сервисы,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(blogApi.middleware)
})