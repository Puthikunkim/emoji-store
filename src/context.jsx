import { useState, createContext } from 'react';
import { filters as defaultFilters } from './data/filters';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [filters, setFilters] = useState(defaultFilters);

    return (
        <ShopContext.Provider value={{ filters, setFilters }}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContext;