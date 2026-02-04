import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories }) => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-input-group">
          <svg 
            className="search-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search projects by title, description, or technology..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              onClick={() => onSearchChange('')}
              className="clear-search"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        
        <div className="filter-container">
          <label htmlFor="category-filter" className="filter-label">
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {searchTerm && (
        <div className="search-results-info">
          <p>Search results for: <strong>"{searchTerm}"</strong></p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
