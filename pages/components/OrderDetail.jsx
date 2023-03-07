import React, { useState } from 'react';
import styles from '../../styles/OrderDetail.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const OrderDetail = ({ total, createOrder, cash, setCash }) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
      };

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.closeButton}><AiOutlineCloseCircle onClick={() => setCash(!cash)}/></div>
            <h1 className={styles.title}>You will pay $12 after delivery</h1>
            <div className={styles.item}>
                <label className={styles.label}>Name Surname:</label>
                <input className={styles.input} 
                placeholder="Enter name and surname" 
                type="text" 
                onChange={(e) => setCustomer(e.target.value)}
                >

                </input>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Phone Number:</label>
                <input className={styles.input} 
                placeholder="+1 234 6543 33" 
                type="text" 
                onChange={(e) => setCustomer(e.target.value)}
                >

                </input>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Address:</label>
                <textarea className={styles.textarea} 
                rows={5}
                placeholder="Welington St. 34/58" 
                type="text" 
                onChange={(e) => setAddress(e.target.value)}
                >
                </textarea>
            </div>
            <button className={styles.button} onClick={handleClick}>
                Order
            </button>
        </div>
    </div>
  )
}

export default OrderDetail;