import useProductFetcher from "../hooks/useProductFetcher";
import ProductList from "../components/ProductList";
import SkeletonLoader from "../components/SkeletonLoader";

export default function ProductContainer() {

    const { products, loading } = useProductFetcher();

    return (

        <div className="container">

            <h1>Product Store</h1>

            {loading
                ? <SkeletonLoader />
                : <ProductList products={products} />
            }

        </div>
    );
}