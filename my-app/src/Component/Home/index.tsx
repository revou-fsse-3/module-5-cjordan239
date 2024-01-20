// HomePage.tsx
import React from 'react';
import NavigationButton from '../NavigationButton';
import styles from './styles/style-home.module.css';

const HomePage = () => {

  return (

    <div className={styles['home-container']}>
      <NavigationButton route="/science" className={styles['cool-button']}>
        Science
      </NavigationButton>

      <NavigationButton route="/sports" className={styles['awesome-button']}>
        Sports
      </NavigationButton>

      <NavigationButton route="/business" className={styles['cool-button']}>
        Business
      </NavigationButton>

      <NavigationButton route="/tech" className={styles['awesome-button']}>
        Technology
      </NavigationButton>

      <NavigationButton route="/food" className={styles['awesome-button']}>
        Food
      </NavigationButton>
    </div>
  );
};

export default HomePage;
