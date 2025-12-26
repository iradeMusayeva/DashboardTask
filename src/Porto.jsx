import React from 'react'
import React, { useState, useEffect } from 'react';
import './App.scss';

import Sidebar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import StatsCard from './components/statsCard/StatsCard';
import ProductCard from './components/productCard/ProductCard';

import { fetchProducts, fetchCategories } from './Services/api';
import { calculateStats, filterProducts } from './utils/helpers';

const Porto = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState(['all']);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalProducts: 0,
        avgPrice: 0,
        totalValue: 0,
        avgRating: 0
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);

            const [productsData, categoriesData] = await Promise.all([
                fetchProducts(),
                fetchCategories()
            ]);

            setProducts(productsData);
            setFilteredProducts(productsData);
            setCategories(['all', ...categoriesData]);
            setStats(calculateStats(productsData));

            setLoading(false);
        } catch (error) {
            console.error('Xəta:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const filtered = filterProducts(products, searchTerm, selectedCategory);
        setFilteredProducts(filtered);
        setStats(calculateStats(filtered));
    }, [searchTerm, selectedCategory, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Yüklənir...</p>
            </div>
        );
    }

    return (
        <div className="app">
            <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            <div className="main-content">
                <Header
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                />

                <div className="stats-grid">
                    <StatsCard
                        icon="📦"
                        title="Total"
                        value={stats.totalProducts}
                        label="Məhsul sayı"
                        color="blue"
                    />
                    <StatsCard
                        icon="📈"
                        title="Orta"
                        value={`$${stats.avgPrice}`}
                        label="Orta qiymət"
                        color="green"
                    />
                    <StatsCard
                        icon="🛒"
                        title="Cəmi"
                        value={`$${stats.totalValue}`}
                        label="Ümumi dəyər"
                        color="purple"
                    />
                    <StatsCard
                        icon="⭐"
                        title="Reytinq"
                        value={`${stats.avgRating} ⭐`}
                        label="Orta reytinq"
                        color="orange"
                    />
                </div>

                <div className="products-container">
                    {filteredProducts.length > 0 ? (
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>Məhsul tapılmadı</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Porto