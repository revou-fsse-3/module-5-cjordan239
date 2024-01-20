// components/Footer.tsx

import React from 'react';
import styles from './styles/style-footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div>
        <p>&copy; 2024 Your Website Name</p>
      </div>
      <div className={styles['social']}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://th.bing.com/th/id/OIP.K61w8tCEKaKN--vUwjeSSwHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt="Facebook"
            className={styles['icon']}
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://th.bing.com/th/id/OIP.erK8SN73oi9FYRoCu1ZN8QHaHa?rs=1&pid=ImgDetMain"
            alt="Twitter"
            className={styles['icon']}
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
            alt="Instagram"
            className={styles['icon']}
          />
        </a>
      </div>
      <div className={styles['donation']}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Buy me a coffee <img src="#" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
