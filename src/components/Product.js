import { Component } from "react";
import Button from './Button'

class Product extends Component {
    render() {
        const { product, addToCart }  = this.props
        return (
            <div className="product">
                <img alt={product.name} src={product.img} className="product-img" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Add To Cart
                </Button>
            </div>
        )
    }
}

export default Product