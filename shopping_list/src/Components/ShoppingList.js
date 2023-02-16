import styles from '../App.module.scss'

const ShoppingList = ({products, handleLeftClickShoppingList, handleIsCrossedChange}) => {

    return (
        <div className={styles.App}>
            <div className={styles.AppList}>
                <div className={styles.AppHeader}>
                    <h1>Shopping list:</h1>  
                </div>
                <div className={styles.AppList}>
                <ul>{products.map((product, idx) => {
                return  <p 
                            key={idx}
                            onClick={() => handleLeftClickShoppingList(idx)}
                            style={(product.isCrossed) ? {textDecoration: 'line-through'} : null}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                handleIsCrossedChange(idx)
                            }}
                        >
                            {product.name}
                        </p>
                })}
            </ul>
                </div>
            </div>
        </div>
      ) 
};

export default ShoppingList;
