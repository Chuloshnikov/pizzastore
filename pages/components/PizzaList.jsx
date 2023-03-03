import React from 'react';
import styles from "../../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.description}>
        Welcome to our cozy and delicious pizza restaurant! 
        Here at our restaurant, we are passionate about serving 
        the most mouth-watering and authentic pizza that will 
        leave you craving for more. Upon entering our restaurant, 
        you will be greeted with a warm and inviting atmosphere 
        that will make you feel right at home. The aroma of 
        fresh-baked dough and sizzling toppings will surely 
        whet your appetite and leave you eager to indulge 
        in our delectable menu offerings.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList;