import React from "react";

const Filter = ({productSubstring, handleSubmit, handleChange}) => {
  return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="searchhtmlFor">Search</label>
        <input 
        type="text"
        value={productSubstring}
        required
        onChange={(e) => handleChange(e.target.value)}/>
    </form>
    )
    
};

export default Filter;
