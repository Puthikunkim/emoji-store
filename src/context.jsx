import { useState, createContext } from 'react';
import { fruits as defaultFruits } from './data/fruits';
import { filters as defaultFilters } from './data/filters';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [filters, setFilters] = useState(defaultFilters);
    const [fruits, setFruits] = useState(defaultFruits);
    const [favouritePage, setFavouritePage] = useState(false);
    const [query, setQuery] = useState('');


    return (
        <ShopContext.Provider value={{ filters, setFilters, fruits, setFruits, favouritePage, setFavouritePage, query, setQuery }}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContext;