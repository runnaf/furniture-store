import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: {},
    price: [0, 100000],
    color: {},
    material: {},
    availability: {},
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearFilter: (state, action) => {
            const { category, key } = action.payload
            if (category === 'price') {
                state.price = [0, 100000]
            } else if (state[category] && state[category][key]) {
                delete state[category][key]
            }

        },
        clearAllFilters: () => {
            return initialState;
        }
    }
});

export const { setFilter, clearFilter, clearAllFilters } = filterSlice.actions;
export default filterSlice.reducer;