export default function SkeletonLoader() {

    const skeletonItems = Array(8).fill(0);

    return (
        <div className="grid">
            {skeletonItems.map((_, index) => (
                <div key={index} className="skeleton-card">
                    <div className="skeleton-img"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                </div>
            ))}
        </div>
    );
}