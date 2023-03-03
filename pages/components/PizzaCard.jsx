import React from 'react';
import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/images/pizza.png" alt="" width="200" height="200" />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.description}>
        FIORI DI ZUCCA pizza is a delicious and unique pizza that 
        features fresh zucchini flowers as the star ingredient. 
        The pizza starts with a thin, crispy crust that is generously 
        topped with a tangy tomato sauce and melted mozzarella cheese.
        </p>
    </div>
  )
}

export default PizzaCard;