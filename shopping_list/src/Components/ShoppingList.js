import columnStyles from '../common/commonStyles.scss'

const ShoppingList = ({products, handleRightClick}) => {
    return (
        <div className={columnStyles.App}>
            <h1>Shopping list:</h1>
            <ul>{products.map((product, idx) => 
                <p 
                    key={idx + 'S'} 
                    onContextMenu={() => handleRightClick(product.name)}
                    >{product.name}
                </p>
                )}
            </ul>
        </div>
      )
};

export default ShoppingList;
