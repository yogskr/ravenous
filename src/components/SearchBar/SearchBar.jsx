/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar() {
  // Manage sortByOptions
  const [selectedSortBy, setSelectedSortBy] = useState('best_match');
  const handleSortByOption = (option) => {
    setSelectedSortBy(option);
  };

  // Manage businessInput
  const [businessInput, setBusinessInput] = useState('');
  const handleBusinessInput = (e) => {
    setBusinessInput(e.target.value);
  };

  // Manage locationInput
  const [locationInput, setLocationInput] = useState('');
  const handleLocationInput = (e) => {
    setLocationInput(e.target.value);
  };

  const handleClick = () => {
    businessInput();
    locationInput();
    selectedSortBy();
  };

  const renderSortByOptions = () =>
    Object.entries(sortByOptions).map(([text, value]) => (
      <li
        key={value}
        className={
          selectedSortBy === value
            ? `${styles.selectedSortByOptionList}`
            : styles.sortByOptionList
        }
        onClick={() => handleSortByOption(value)}>
        {text}
      </li>
    ));

  return (
    <header>
      <h1 className={styles.headerText}>itstasty</h1>
      <div className={styles.headerBackground}>
        <div className={styles.sortByOptionsContainer}>
          <ul className={styles.sortByOptions}>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search Businesses"
            className={styles.searchInput}
            value={businessInput}
            onChange={handleBusinessInput}
          />
          <input
            type="text"
            placeholder="Where?"
            className={styles.searchInput}
            value={locationInput}
            onChange={handleLocationInput}
          />
        </div>
        <button type="button" onClick={handleClick}>
          Let's Go
        </button>
      </div>
    </header>
  );
}
