import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" layout="fill" alt="bg" objectFit='cover'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE MCH PIZZA, WELL BACKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1783 Down Road #304.
            <br/> San-Francisco, 75431 
            <br/> (777) 77-77-77
          </p>
          <p className={styles.text}>
            1834 Caroll St #125.
            <br /> NewYork, 83559
            <br /> (888) 888-881-88
          </p>
          <p className={styles.text}>
            1236 First St #125.
            <br /> Los-Angeles, 18942
            <br /> (999) 888-893-54
          </p>
          <p className={styles.text}>
            1058 S. Stalone St #125.
            <br /> Ukraine, Kyiv 12765
            <br /> (380) 990-73-45
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br/> 9:00 - 22:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br/> 12:00 - 24:00
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;