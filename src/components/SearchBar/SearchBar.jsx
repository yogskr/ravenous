/* eslint-disable react/no-unescaped-entities */
import styles from 'SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar() {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions(sortByOption);
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.sortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.searchBarFields}>
        <input type="text" placeholder="Search Businesses" />
        <input type="text" placeholder="Where?" />
        <button type="button">Let's Go</button>
      </div>
    </div>
  );
}
