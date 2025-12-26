export const calculateStats = (products) => {
    if (!products || products.length === 0) {
        return {
            totalProducts: 0,
            avgPrice: 0,
            totalValue: 0,
            avgRating: 0
        };
    }

    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + product.price, 0);
    const avgPrice = totalValue / totalProducts;
    const avgRating = products.reduce((sum, product) => sum + product.rating.rate, 0) / totalProducts;

    return {
        totalProducts,
        avgPrice: avgPrice.toFixed(2),
        totalValue: totalValue.toFixed(2),
        avgRating: avgRating.toFixed(1)
    };
};

export const filterProducts = (products, searchTerm, category) => {
    let filtered = [...products];

    if (category && category !== 'all') {
        filtered = filtered.filter(product => product.category === category);
    }

    if (searchTerm && searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );
    }

    return filtered;
};

export const formatPrice = (price) => {
    return `${parseFloat(price).toFixed(2)}`;
};

export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const formatCategoryName = (category) => {
    if (category === 'all') return 'Hamısı';
    return category.charAt(0).toUpperCase() + category.slice(1);
};