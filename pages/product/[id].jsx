import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';



const Product = () => {

    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: '/images/pizza.png',
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        description: `CAMPAGNOLA pizza is a delicious Italian-style 
        pizza that is sure to satisfy your taste buds. This pizza 
        is made with a thin crust that is crispy on the outside and
        chewy on the inside. The toppings on this pizza consist of 
        fresh tomato sauce, mozzarella cheese, mushrooms, ham, artichokes, and olives.`,
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt="pizza"/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.description}>{pizza.description}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/images/size.png" layout="fill" alt="size"/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/images/size.png" layout="fill" alt="size"/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/images/size.png" layout="fill" alt="size"/>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}> Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="double" name="double"/>
                    <label htmlFor='double'>Double ingredients</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="cheese" name="cheese"/>
                    <label htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="spicy" name="spicy"/>
                    <label htmlFor="spicy">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="garlic" name="garlic"/>
                    <label htmlFor="garlic">Garlic Sauce</label>
                </div>
            </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
                </div>
        </div>
    </div>
  )
}

export default Product;