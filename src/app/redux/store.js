import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from '../../shared/api/api';
import filterReducer from '../../entities/Filters/model/filterSlice'

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    filters: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})