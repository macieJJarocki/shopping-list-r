import React from "react";

const Filter = ({productSubstring, setProductSubstring}) => {
  return(
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchhtmlFor">Search:</label>
        <input 
        type="text"
        role='searchbox'
        value={productSubstring}
        required
        onChange={(e) => setProductSubstring(e.target.value)}/>
    </form>
    )
};

export default Filter;
