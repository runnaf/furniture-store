import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
    return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        category: {},
        price: [0, 100000],
        color: {},
        material: {},
        availability: {}
    });

    const clearFilter = (key) => {
        setSelectedFilters(prev => ({
            ...prev,
            [key]: key === 'price' ? [0, 100000] : {}
        }));
    };

    const clearAllFilters = () => {
        setSelectedFilters({
            category: {},
            price: [0, 100000],
            color: {},
            material: {},
            availability: {}
        });
    };

    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters, clearFilter, clearAllFilters }}>
            {children}
        </FilterContext.Provider>
    );
};