
import React from 'react';
import { formatPrice, truncateText } from '../../utils/helpers';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        alert('Səbətə əlavə edildi:', product.title);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{truncateText(product.title, 50)}</h3>
                <p className="product-description">{truncateText(product.description, 80)}</p>

                <div className="product-footer">
                    <span className="product-price">{formatPrice(product.price)}</span>

                    <div className="product-rating">
                        <span className="star">⭐</span>
                        <span className="rating-value">{product.rating.rate}</span>
                        <span className="rating-count">({product.rating.count})</span>
                    </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Səbətə at
                </button>
            </div>
        </div>
    );
};

export default ProductCard;