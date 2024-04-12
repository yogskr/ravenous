import styles from 'Business.module.css';

function Business() {
  const business = {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Favortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  };

  return (
    <div className={styles.business}>
      <figure className={styles.imageContainer}>
        <img src={business.imageSrc} alt="Business image" />
      </figure>
      <h2>{business.name}</h2>
      <div className={styles.businessInformation}>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{`${business.state} ${business.zipCode}`}</p>
      </div>
      <div className={styles.businessReviews}>
        <h3>{business.category.toUpperCase()}</h3>
        <h3>{`Rating: ${business.rating} stars`}</h3>
        <h3>{`${business.reviewCount} reviews`}</h3>
      </div>
    </div>
  );
}

export default Business;
