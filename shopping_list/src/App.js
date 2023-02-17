import { useEffect, useState } from 'react';

import ProductsList from './Components/ProductsList';
import ShoppingList from './Components/ShoppingList';
import Filter from './Components/Filter';
import AddProduct from './Components/AddProduct';

import styles from'./App.module.scss';
import {products} from './common/products'

//  Function handleRightClickShoppingList in ShoppingList component crossed out all duplicate items in a list
//  Issue related to the state?

function App() {

  const [productsDefaultList, setProductsDefaultList] = useState(products)
  const [productsToDisplay, setProductsToDisplay] = useState([...productsDefaultList])
  const [productsShoppingList, setProductsShoppingList] = useState([])

  useEffect(() => {
    setProductsToDisplay(productsDefaultList)
  }, [productsDefaultList])

  // ProductsList
  function handleLeftClickProductsList(productName){
    const product = productsDefaultList.filter((product) => {
      if(product.name === productName){
        product.isCrossed = false
        return product
      }
      return null
    })

    setProductsShoppingList(productsShoppingList.concat(product))
  }
  
  // ShoppingList
  function handleLeftClickShoppingList(idx){
    const products = productsShoppingList.filter((product, i) => idx !== i)
    setProductsShoppingList(products)
  }

  function handleRightClickShoppingList(idx){
    const productsChanged = productsShoppingList.map((product, i) => {
      // console.log(`${product.name}: idx ${idx} - i ${i}`)
      if(idx === i){
          product.isCrossed = !product.isCrossed
      }
      return product
    })

    setProductsShoppingList(productsChanged)
}

// AddProduct
  function handleNewProduct(name, isFood, category){
    const product = {
      name: name,
      category: category,
      foodProduct: isFood
    }

    setProductsDefaultList([...productsDefaultList, product])
  }

  return (
    <div className={styles.appWrapper}>
      <Filter
        productsDefaultList={productsDefaultList}
        setProductsToDisplay={setProductsToDisplay}
      />
      <AddProduct
        handleNewProduct={handleNewProduct}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          productsToDisplay={productsToDisplay}
          handleLeftClickProductsList={handleLeftClickProductsList}
        />

        <ShoppingList 
          productsShoppingList={productsShoppingList}
          handleLeftClickShoppingList={handleLeftClickShoppingList}
          handleRightClickShoppingList = {handleRightClickShoppingList}
        />
      </div>
    </div>
  );
}

export default App;
