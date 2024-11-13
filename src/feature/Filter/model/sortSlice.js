import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    option: 'default',
    label: 'По умолчанию'
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action) => {
            const { value, label } = action.payload; 
            state.option = value;
            state.label = label;
        },
    },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
