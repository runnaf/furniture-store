import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from '../../shared/api/api';
import filterReducer from '../../feature/Filter/model/filterSlice';
import sortReducer from '../../feature/Filter/model/sortSlice';
import cartReducer from '../../feature/AddToCart/model/cartSlice';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    filters: filterReducer,
    sort: sortReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})