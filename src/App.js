import { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {

  state = {

    products: [
      { name: 'Iphone 13 Pro', price: 999, img:  '/products/iphone.jpg' },
      { name: 'HomePod Mini', price: 179, img:  '/products/homepod.jpg' },
      { name: 'Airpods 3', price: 99, img:  '/products/airpods.jpg' },
    ],

    cart: [
      // { name: 'Airpods 3', price: 99, img:  '/products/airpods.jpg', quantity: 1 },
    ],

    isCartVisible: false,

  }

  addToCart = (product) => {

    const { cart } = this.state;

    if ( cart.find(x => x.name === product.name ) ) {
      const newCart = cart.map( x => x.name === product.name 
        ? ({
          ...x,
          quantity: x.quantity + 1
        })
        : x)
        return this.setState({ cart: newCart})
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCart = () => {
    if( !this.state.cart.length ) {
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {

    const { isCartVisible } = this.state

    return (
      <div>
        <Navbar
          cart={ this.state.cart }
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
