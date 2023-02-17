import styles from "../App.module.scss"

const ProductsList = ({ productsToDisplay, handleLeftClickProductsList }) => {
  
  return (
    <div className={styles.App}>
      <div className={styles.AppList}>
        <div className={styles.AppHeader}>
          <h3>Available products:</h3>  
        </div>
        <div className={styles.AppList}>
          <ul>{productsToDisplay.map((product, idx) => 
            <p 
              key={idx} 
              onClick={() => handleLeftClickProductsList(product.name)}
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


