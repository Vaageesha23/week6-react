const API_URL = "https://dummyjson.com/products";

export const createProductFetcher = () => {

    let cache = null;
    let lastFetchTime = null;
    let fetchAttempts = 0;

    return async function fetchProducts() {

        fetchAttempts++;
        console.log("Fetch attempt:", fetchAttempts);

        if (cache) {
            console.log("Returning cached data");
            return Promise.resolve(cache);
        }

        const response = await fetch(API_URL);
        const data = await response.json();

        cache = data.products;
        lastFetchTime = Date.now();

        return cache;
    };
};

export const productFetcher = createProductFetcher();