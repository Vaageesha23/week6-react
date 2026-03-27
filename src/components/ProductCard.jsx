export default function ProductCard({ product }) {

    return (
        <div className="card">

            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <h4>${product.price}</h4>

        </div>
    );
}