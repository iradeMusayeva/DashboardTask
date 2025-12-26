
import React from 'react';

const Header = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="header">
            <h2>Məhsullar</h2>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Axtar..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default Header;