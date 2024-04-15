/* eslint-disable react/no-unescaped-entities */
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar() {
  const renderSortByOptions = () =>
    Object.entries(sortByOptions).map(([text, value]) => (
      <li key={value} className={styles.sortByOptionList}>
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
          />
          <input
            type="text"
            placeholder="Where?"
            className={styles.searchInput}
          />
        </div>
        <button type="button">Let's Go</button>
      </div>
    </header>
  );
}
