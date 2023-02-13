import { Component } from "react";

export default class AddProduct extends Component {

    constructor(props){
        super(props)

        this.state = {
            productName: '',
            productIsFood: false,
            productCategory: ''
        }
    }

  render() {
    return(
        <form 
        onSubmit={(e) => e.preventDefault()}
    >
        <label>Product:</label>
        <input type="text" 
            onChange={(e) => this.setState({productName: e.target.value})}
            required
            minLength='3'
        />
        <label>FoodProduct:</label>
        <input type="checkbox"
            onChange={(e) => this.setState({productIsFood: !this.state.productIsFood})}
        />
        <label>Category</label>
        <input type="text" 
            onChange={(e) => this.setState({productCategory: e.target.value})}
            required
            minLength='3'
        />
        <button
            onClick={() => this.props.handleNewProduct(this.state.productName, this.state.productIsFood, this.state.productCategory)}
        >
            Add Product
        </button>
    </form>
    )
  }
}

