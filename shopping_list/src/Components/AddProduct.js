import { Component } from "react";
import styles from '../App.module.scss'

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
        <div className={styles.Wrapper}>
            <form 
                onSubmit={(e) => e.preventDefault()}
            >
            <label>Product:</label>
            <input type="text" 
                required
                minLength='3'
                onChange={(e) => this.setState({productName: e.target.value})}
            />
            <label>FoodProduct:</label>
            <input type="checkbox"
                onChange={(e) => this.setState({productIsFood: !this.state.productIsFood})}
            />
            <label>Category</label>
            <input type="text" 
                required
                minLength='3'
                onChange={(e) => this.setState({productCategory: e.target.value})}
            />
            <button
                onClick={() => this.props.handleNewProduct(this.state.productName, this.state.productIsFood, this.state.productCategory)}
            >
                Add Product
            </button>
            </form>
        </div>
    )
  }
}

