import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

export const PRODUCT_CONTEXT = createContext();

function App() {
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
        <div>
            <PRODUCT_CONTEXT.Provider value={value}>
                <RouterProvider router={routes} />
            </PRODUCT_CONTEXT.Provider>
        </div>
    );
}

export default App;
