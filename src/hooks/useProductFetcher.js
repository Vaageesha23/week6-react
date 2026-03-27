import { useEffect, useRef, useState } from "react";
import { productFetcher } from "../api/productService";

export default function useProductFetcher() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const requestIdRef = useRef(0);

    useEffect(() => {

        let isActive = true;
        const requestId = ++requestIdRef.current;

        const loadProducts = async () => {

            try {
                const data = await productFetcher();

                if (isActive && requestId === requestIdRef.current) {
                    setProducts(data);
                }

            } catch (error) {
                console.error("Error fetching products", error);
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        loadProducts();

        return () => {
            isActive = false;
        };

    }, []);

    return { products, loading };
}