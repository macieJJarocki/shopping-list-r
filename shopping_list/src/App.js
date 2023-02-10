import logo from './logo.svg';
import styles from'./App.scss';
import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import { useState } from 'react';
import {products} from './common/products'


// TODO

// 1. po klikniecu prawym przyciskiem myszy
// usuwane sa wszystkie takie same elementy z componentu ShoppingList

// klucze 



function App() {
  const[productsList, setProductsList] = useState([])

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

  return (
    <div className={styles.appWrapper}>
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
