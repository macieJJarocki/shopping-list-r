import React, { useState } from "react";

const AddProduct = ({setProducts, products}) => {
    const [productName, setProductName] = useState('')
    const [productIsFood, setProductIsFood] = useState(false)
    const [productCategory, setProductCategory] =useState('')

    function handleAddProductClick(){
        if(productName && productCategory){
            const newProduct = {
                name: productName,
                category: productCategory,
                foodProduct: productIsFood,
            }
            setProducts([...products, newProduct])
        }
    }

   
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Product:</label>
        <input type="text" 
        onChange={(e) => setProductName(e.target.value)}
        required
        minLength='3'
        />
        <label>FoodProduct:</label>
        <input type="checkbox" 
        onClick={() => setProductIsFood(true)}
        />
        <label>Category</label>
        <input type="text" 
        onChange={(e) => setProductCategory(e.target.value)}
        required
        minLength='3'
        />
        <button
        onClick={() => handleAddProductClick()}
        
        >Add Product</button>

    </form>
  );
};

export default AddProduct;
