import columnStyles from '../common/commonStyles.scss'

const ShoppingList = ({products, handleLeftClickShoppingList, handleIsCrossedChange}) => {

    return (
        <div className={columnStyles.App}>
            <h1>Shopping list:</h1>
            <ul>{products.map((product, idx) => {
                return  <p key={idx}
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
      ) 
};

export default ShoppingList;
