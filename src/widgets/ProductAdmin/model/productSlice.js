import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    sub_categories: "",
    name: "",
    short_description: "",
    price: null,
    sale_price: null,
    timer: "",
    color: [
        {
            value: "",
            label: "",
            images: []
        }
    ],
    availability: {},
    tags: [],
    article_number: null,
    description: {
        paragraphs: [],
        list: []
    },
    information: {
        material: [],
        color: [],
        weight: "",
        dimensions: "",
        brand: ""
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            return { ...state, ...action.payload };
        },
        editProduct: (state, action) => {
            const { category, key } = action.payload
            if (state[category] && state[category][key]) {
                delete state[category][key]
            }
        }
    }
});

export const { addProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;