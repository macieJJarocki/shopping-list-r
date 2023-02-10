import logo from './logo.svg';
import styles from'./App.scss';
import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import { useState } from 'react';
import {products} from './common/products'
import Filter from './Components/Filter';

function App() {
  const[productsList, setProductsList] = useState([])

  const [productSubstring, setProductSubstring] = useState('')

  function handleLeftClick(productName){
    const product = products.filter((product) =>
      product.name === productName
    )
    setProductsList(productsList.concat(product))
  }

  function handleRightClick(productName){
    const products = productsList.filter((product) =>
      product.name !== productName)
      setProductsList(products)
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleChange(inputValue){
    if(inputValue){
      setProductSubstring(inputValue)
      
    }

  }

  return (
    <div className={styles.appWrapper}>
      <Filter
        productSubstring={productSubstring}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={products}
          handleLeftClick={handleLeftClick}
        />
        <ShoppingList 
          products={productsList}
          handleRightClick={handleRightClick}
        />
      </div>
    </div>
  );
}

export default App;
