import React from 'react';
import styles from "../../styles/Add.styles.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.addButton} onClick={() => setClose(false)}>
        Add New Pizza
    </div>
  )
}

export default AddButton;