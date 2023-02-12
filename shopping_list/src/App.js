import logo from './logo.svg';
import styles from'./App.scss';
import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import Filter from './Components/Filter';
import AddProduct from './Components/AddProduct';
import { useState } from 'react';
import {products as p} from './common/products'

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
        products={products}
        setProducts={setProducts}
       
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
        <AddProduct
        products={products}
        setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
