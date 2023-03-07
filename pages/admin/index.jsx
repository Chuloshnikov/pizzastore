import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Admin.module.css';

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr className={styles.trTitle}>
                        <td>
                            <Image
                            src="/images/pizza/png"
                            width={50}
                            height={50}
                            objectFit="cover"
                            alt=""
                            />
                        </td>
                        <td>PizzaId</td>
                        <td>PizzaTitle</td>
                        <td>$50</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.item}></div>
    </div>
  )
}

export default index;