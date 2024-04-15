import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import styles from './App.module.css';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Favortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

export default function App() {
  return (
    <>
      <SearchBar />
      <main className={styles.container}>
        <BusinessList businesses={businesses} />
      </main>
    </>
  );
}
