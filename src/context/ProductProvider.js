import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialState, productReducer } from "../state/ProductState/productReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/mohammadtanim24h/moon-tech-reducer-context/main/products.json"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const value = {
        data: products,
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
};

export default ProductProvider;
