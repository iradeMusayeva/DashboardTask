
import React from 'react';

const StatsCard = ({ icon, title, value, label, color }) => {
    return (
        <div className={`stat-card ${color}`}>
            <div className="stat-header">
                <span className="stat-icon">{icon}</span>
                <span className="stat-badge">{title}</span>
            </div>
            <h3 className="stat-value">{value}</h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

export default StatsCard;