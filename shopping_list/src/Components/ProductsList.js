import React from "react";
import columnStyles from '../common/commonStyles.scss'

const ProductsList = ({products, handleLeftClick}) => {
  return (
    <div className={columnStyles.App}>
      <h1>Available products:</h1>
      <ul>{products.map((product, idx) => 
        <p 
        key={idx + 'P'} 
        onClick={() => handleLeftClick(product.name)}
        >{product.name}
        </p>
      )}
      </ul>
    </div>
  )
};

export default ProductsList;
