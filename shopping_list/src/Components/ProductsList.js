import React from "react";
import styles from "../App.module.scss"

const ProductsList = ({productsToDisplay, handleLeftClick}) => {
  return (
    <div className={styles.App}>
    <div className={styles.AppList}>
      <div className={styles.AppHeader}>
        <h1>Available products:</h1>  
      </div>
      <div className={styles.AppList}>
        <ul>{productsToDisplay.map((product, idx) => 
          <p 
            key={idx + 'P'} 
            onClick={() => handleLeftClick(product.name)}
          >
            {product.name}
          </p>
          )}
        </ul>
      </div>
    </div>
  </div>
  )
};

export default ProductsList;


