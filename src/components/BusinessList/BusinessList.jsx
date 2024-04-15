/* eslint-disable react/prop-types */
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

export default function BusinessList({ businesses }) {
  return (
    <div className={styles.businessListContainer}>
      {businesses.map((business) => (
        <Business key={business.name} business={business} />
      ))}
    </div>
  );
}
