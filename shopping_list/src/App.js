import logo from './logo.svg';
import styles from'./App.module.scss';
import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import Filter from './Components/Filter';
import AddProduct from './Components/AddProduct';
import { useEffect, useState } from 'react';
import {products as p} from './common/products'

//TODO  Function handleIsCrossedChange in ShoppingList strikes out duplicate items in a list

function App() {
  const [products, setProducts] = useState(p.map((product, idx) => {
    product.id = idx
    return product
  }))

  const [productsToDisplay, setProductsToDisplay] = useState([...products])

  const[productsList, setProductsList] = useState([])

  useEffect(() => {
    setProductsToDisplay(products)
  }, [products])

  // ProductsList
  function handleLeftClick(productName){
    const product = products.filter((product) => {
      if(product.name === productName){
        product.isCrossed = false

        return product
      }
      return null
    })
    setProductsList(productsList.concat(product))
  }
  
  // ShoppingList
  function handleLeftClickShoppingList(idx){
    const products = productsList.filter((product, i) =>
      idx !== i)
      setProductsList(products)
  }

  function handleIsCrossedChange(idx){
    const productsChanged = productsList.map((product, i) => {
        console.log(`${product.name}: idx ${idx} - i ${i}`)
        if(idx === i){
            product.isCrossed = !product.isCrossed
    }
    return product
   }) 
   setProductsList(productsChanged)
}

// AddProduct
  function handleNewProduct(name, isFood, category){
    const product = {
      name: name,
      category: category,
      foodProduct: isFood
    }
    setProducts([...products, product])
  }

  return (
    <div className={styles.appWrapper}>
      <Filter
        products={products}
        setProductsToDisplay={setProductsToDisplay}
      />
      <AddProduct
        handleNewProduct={handleNewProduct}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          productsToDisplay={productsToDisplay}
          handleLeftClick={handleLeftClick}
          />
        <ShoppingList 
          products={productsList}
          handleLeftClickShoppingList={handleLeftClickShoppingList}
          handleIsCrossedChange = {handleIsCrossedChange}
          />
      </div>
    </div>
    


  );
}

export default App;
