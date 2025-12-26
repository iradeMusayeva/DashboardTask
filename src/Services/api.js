const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async() => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Məhsullar yüklənə bilmədi');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Xətası:', error);
        throw error;
    }
};

export const fetchCategories = async() => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/categories`);
        if (!response.ok) throw new Error('Kateqoriyalar yüklənə bilmədi');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Xətası:', error);
        throw error;
    }
};

export const fetchProductsByCategory = async(category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        if (!response.ok) throw new Error('Məhsullar yüklənə bilmədi');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Xətası:', error);
        throw error;
    }
};

export const fetchProductById = async(id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Məhsul tapılmadı');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Xətası:', error);
        throw error;
    }
};