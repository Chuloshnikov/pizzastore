import React, { useState } from 'react';
import styles from '../../styles/Slider.module.css';
import Image from "next/image";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "/images/slider12.png",
        "/images/slider22.png",
        "/images/slider33.png",
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index-1 : 2)
        } else if (direction === "r") {
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

  return (
    <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0}} onClick={()=> handleArrow("l")}>
                <Image src="/images/arrowl.png" alt='arrow left' layout='fill' objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt="slider" layout='fill' objectFit="contain" />
                </div>
        ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=> handleArrow("r")}>
            <Image src="/images/arrowr.png" alt='arrow right' layout='fill' objectFit="contain"/>
            </div>
        
    </div>
  )
}

export default Slider;