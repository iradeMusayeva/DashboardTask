import React from 'react';
import { formatCategoryName } from '../../utils/helpers';

const Sidebar = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Dashboard</h1>
                <p>E-Commerce</p>
            </div>

            <nav className="sidebar-nav">
                <h3>Kateqoriyalar</h3>
                <div className="category-buttons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {formatCategoryName(category)}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;