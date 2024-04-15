/* eslint-disable react/prop-types */
import styles from './Business.module.css';

function Business({ business }) {
  return (
    <div className={styles.businessContainer}>
      <figure>
        <img
          src={business.imageSrc}
          alt="Business image"
          className={styles.businessImage}
        />
      </figure>
      <h2>{business.name}</h2>
      <section className={styles.businessInfo}>
        <div>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div>
          <h3>{business.category.toUpperCase()}</h3>
          <h3>{`Rating: ${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </section>
    </div>
  );
}

export default Business;
