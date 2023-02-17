import styles from '../App.module.scss'

const ShoppingList = ({ productsShoppingList, handleLeftClickShoppingList, handleRightClickShoppingList }) => {

    return (
    <div className={styles.App}>
        <div className={styles.AppList}>
            <div className={styles.AppHeader}>
                <h3>Shopping list:</h3>  
            </div>
            <div className={styles.AppList}>
                <ul>{productsShoppingList.map((product, idx) => {
                    return (
                    <p 
                        key={idx}
                        style={(product.isCrossed) ? {textDecoration: 'line-through'} : null}

                        onClick={() => handleLeftClickShoppingList(idx)}
                        onContextMenu={(e) => {
                            e.preventDefault()
                            handleRightClickShoppingList(idx)
                        }}
                    >
                        {product.name}
                    </p>)
                })}
                </ul>
            </div>
        </div>
    </div>
    ) 
};

export default ShoppingList;
