import React, { useState, useRef } from "react";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
}

const Filter = ({productSubstring, setProductSubstring, products, setProducts}) => {
  const [allProducts, setAllProducts] = useState()
  const [allCategories, setAllCategories] = useState([''])
  const [category, setCategory] = useState()

  useConstructor(() => {
    setAllProducts(products);
    setAllCategories(setCategories());
  });

 function setCategories(){
  console.log('getCategoryOptions');
    return products.reduce((acc, crr) => {
      if(!acc.includes(crr.category)){
        return ([...acc, crr.category])
      } 
      return acc
    }, allCategories)
  }

  function getCategoryOptions(){
    return allCategories.map((category, idx) => 
       <option key={idx}>{category}</option>
    )
  }

  function handleFilteredProducts(){
    const productsFilteredByName = allProducts.filter((product) => product.name.includes(productSubstring))
    const productsFilteredByCategory = productsFilteredByName.filter((product) => product.category.includes(category))
    setProducts(productsFilteredByCategory);
  }

  function handleCategoryChange(categorySelected){
    setCategory(categorySelected)
  }

  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Search:</label>
      <input 
        type="text"
        role='searchbox'
        value={productSubstring}
        required
        onChange={(e) => setProductSubstring(e.target.value)}/>
      <label>Select Category:</label>
      <select 
        name="category-search" 
        id="category-search"
        //value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {getCategoryOptions()}
      </select>
      <button
        onClick={() => handleFilteredProducts()}
        >
          Search
        </button>
    </form>
    )
};

export default Filter;
