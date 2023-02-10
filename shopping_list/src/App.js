import logo from './logo.svg';
import styles from'./App.scss';
import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import { useState } from 'react';
import {products as p} from './common/products'
import Filter from './Components/Filter';

function App() {
  const [products, setProducts] = useState(p)

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

  return (
    <div className={styles.appWrapper}>
      <Filter
        productSubstring={productSubstring}
        setProductSubstring={setProductSubstring}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={products.filter((product) => product.name.includes(productSubstring))}
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
