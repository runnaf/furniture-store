import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: {},
    price: [0, 100000],
    color: {},
    material: {},
    availability: {}
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        clearFilter: (state, action) => {
            const key = action.payload;
            state[key] = key === 'price' ? [0, 100000] : {};
        },
        clearAllFilters: (state) => {
            return initialState;
        }
    }
});

export const { setFilter, clearFilter, clearAllFilters } = filterSlice.actions;
export default filterSlice.reducer;