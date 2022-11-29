import React, { createContext, useContext, useEffect, useState } from "react";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

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
