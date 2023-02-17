import { useEffect, useState } from "react"

import styles from "../App.module.scss"

const Filter = ({ productsDefaultList, setProductsToDisplay }) => {
  
  const [phrase, setPhrase] = useState("")
  const [category, setCategory] = useState("All")
  const [isFood, setIsFood] = useState(false)
  
  useEffect(() =>{
    handleForm()
  }, [phrase, category, isFood])

  function returnCategoryOptions(){
    const categoriesOptions = [...new Set(productsDefaultList.map((product) => product["category"]))]
    return categoriesOptions.map((category, idx) => {return<option key={idx}>{category}</option>})
  }
  
  function handleForm(){
    let filteredProducts = productsDefaultList.filter(product => product.name.includes(phrase.toLocaleLowerCase()))

    if(category !== "All"){
      filteredProducts = filteredProducts.filter(product => product.category === category)
    }

    if(isFood){
      filteredProducts = filteredProducts.filter(product => product.foodProduct === isFood)
    }

    setProductsToDisplay(filteredProducts)
  }

  return (
    <div className={styles.Wrapper}>
      <form>
        <label >Search by phrase: </label>
        <input type="text"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
        <label >Categories</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
        >
          <option key="All">All</option>
          {returnCategoryOptions()}
        </select>
        <label >Only food products</label>
        <input type="checkbox"
          value={isFood}
          onChange={(e) =>setIsFood( e.target.checked)}
        />
      </form>
    </div>
  )
};

export default Filter;
