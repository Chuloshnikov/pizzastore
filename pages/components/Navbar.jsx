import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="phone" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+ 777 77 77 77</div>
        </div>
        </div>
    
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image className={styles.logo} src="/images/logo.gif" alt='logo' width="80" height="80"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
      <Image src="/images/cart.png" alt='logo' width="30" height="30"/>
      <div className={styles.counter}>2</div>
      </div>
    </div>
  )
}

export default Navbar